'use client';

import React, { useContext, useEffect, useState } from 'react';
import CircularLoading from '../../components/circularLoading';
import AppRoutes from '../../constants/appRoutes';
import { AuthTokenContext } from '../../context/AuthToken';
import fiberPendingNewOrder from '../../dataMassaging/fiberPlans/fiberPendingNewOrder';
import { fiberOrderStatesRoute } from '../../constants/routeNavigationAccountState';
import { useRouter } from 'next/router';
import { AlertContext } from '../../context/alertContext/AlertContext';
import AppContext from '../../AppContext';

export default function ContinuePurchase(props: any) {
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const value = useContext(AppContext);
  const navigation = useRouter();
  const { setOrderID } = useContext(AuthTokenContext);

  const router = useRouter();
  const { orderId, lang, token } = router.query;

  const [selectedOrderId, setSelectedOrderId] = useState(orderId);

  useEffect(() => {
    if (lang === 'ar' || lang === 'en') {
      value.setLocale(lang == 'en' ? 'en' : 'ar');
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedLanguage', lang);
      }
    }
  }, [lang]);

  useEffect(() => {
    (async () => {
      if (orderId) {
        const { status, data } = await fiberPendingNewOrder(
          `${orderId}`,
          '200_state_mobile_verification'
        );

        if (status) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('token', `${token}` || '');
            localStorage.setItem('orderId', `${orderId}` || '');
          }
          setOrderID(orderId || '');

          navigation.push(fiberOrderStatesRoute(data?.state!));
        } else {
          setOpen(true);
          setAlertMsg('error_while_fetching_your_order');
          setSeverity('error');
          // navigation.push(AppRoutes.selectFiberPlan);
          const selectedLanguage = lang || 'en';
          window.location.href = `https://salam.sa/${selectedLanguage}/personal`;
        }
      }
    })();
  }, [selectedOrderId]);

  return (
    <>
      <CircularLoading />
    </>
  );
}
