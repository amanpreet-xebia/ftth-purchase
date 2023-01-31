'use client';
import React, { useContext, useEffect, useState } from 'react';
import { FiberPlanDTO } from '../../interface/types';
import getFiberPlans from '../../dataMassaging/fiberPlans/getFiberPlans';
import { useRouter } from 'next/router';
import EmptyScreen from '../../components/emptyScreen';
import AppContext from '../../AppContext';
import AppRoutes from '../../constants/appRoutes';
import { AlertContext } from '../../context/alertContext/AlertContext';
import { AuthTokenContext } from '../../context/AuthToken';

export default function PurchaseRedirect({params}: any) {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }

  const router = useRouter()
  const { planId, lang='en' } = router.query
  const selectedLanguage = lang;
  const value = useContext(AppContext);
  const { setOrderID } = useContext(AuthTokenContext);

  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);

  
  const [pageError, setPageError] = useState(false);

  if (router?.isReady && !planId) {
    window.location.href = `https://salam.sa/${selectedLanguage}/personal`;
  } else {
    if (typeof window !== "undefined") {
      localStorage.setItem("planId", `${planId}`);
      localStorage.setItem("selectedLanguage", `${selectedLanguage}`);
    }
  }

  useEffect(() => {
    if (router?.isReady && (selectedLanguage === "ar" || selectedLanguage === "en")) {
      value.setLocale(selectedLanguage == "en" ? "en" : "ar");
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLanguage", selectedLanguage);
      }
    }
  }, [selectedLanguage]);
 

  const fetchFiberPlans = async () => {
    const { status, msg, data } = await getFiberPlans();
    if (status) {
      let fiberPlan: FiberPlanDTO | undefined;
      data?.forEach((plan: FiberPlanDTO) => {
        if (`${plan.id}` === planId) {
          fiberPlan = plan;
        }
      });
      if (fiberPlan) {
        value.setLocale(selectedLanguage == 'en' ? 'en' : 'ar');
        router.push(AppRoutes.fiberRegistration);
        setOrderID(`${planId}`);
      } else {
        setPageError(true);
        window.location.href = `https://salam.sa/${selectedLanguage}/personal`;
      }
    } else {
      setOpen(true);
      setAlertMsg(msg);
      setSeverity('error');
      setPageError(true);
    }
  };

  useEffect(() => {
    if (planId && planId?.length !== 0) fetchFiberPlans();
  }, [planId]);

  // if (pageError)
    // return (
    //   <EmptyScreen
    //     title="uh_oh"
    //     subtitle="something_wierd_happened_Keep_calm_and_try_again"
    //   />
    // );

    // keeping the above code for safekeeps
  return (
    <>
      {planId == null || planId.length === 0 ? (
        <EmptyScreen
          title="invalid_plan_id"
          subtitle="unable_to_process_your_request"
        ></EmptyScreen>
      ) : (
        <></>
      )}
    </>
  );
}
