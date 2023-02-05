'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import StadiumButton from '../../components/stadiumButton';
import TermsAndCondition from '../../components/dialog/termsCondition';
import TermsAndConditionAR from '../../components/dialog/termsCondition_ar';
import AppRoutes from '../../constants/appRoutes';
import payFiberPlan from '../../dataMassaging/fiberPlans/payFiberPlan';

import {
  fiberOrderStatesRoute,
  getFiberRoutKey,
} from '../../constants/routeNavigationAccountState';
import AppContext from '../../AppContext';
import { AlertContext } from '../../context/alertContext/AlertContext';

export default function PayViaSadad({ planPrice }: any) {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);

  const {
    page: { purchaseFiberPlan },
    confirm,
  } = value.state.languages;

  const [isTermsDialogVisible, setTermsDialog] = useState(false);
  const navigate = useRouter();
  const [isAgreed, setIsAgreed] = useState(false);
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';

  const handleClick = async () => {
    if (isAgreed) {
      const paymentDetails = {
        payment_type: 'sadad',
      };

      const { status, msg, data, errors } = await payFiberPlan(
        paymentDetails,
        orderId
      );

      if (status) {
        const routeData = {
          state: { orderId: orderId, token: data?.token },
        };

        if (data?.state?.trim()) {
          navigate.push(fiberOrderStatesRoute(data?.state));
          return;
        } else {
          navigate.push(AppRoutes.bookAppointment);
          if (typeof window !== 'undefined') {
            localStorage.setItem(
              'state',
              getFiberRoutKey(AppRoutes.bookAppointment)
            );
          }
        }
      } else {
        setOpen(true);
        setAlertMsg('Error while fetching your order');
        setSeverity('error');
      }
    }
  };
  const showTermsDialog = () => {
    setIsAgreed((prev) => {
      if (!prev) {
        setTermsDialog(true);
      }
      return false;
    });
  };
  const onHandleClick = () => {
    setIsAgreed(true);
    setTermsDialog(false);
  };

  const selectedLanguage = locale || 'en';
  return (
    <>
      <div className={'flex flex-col items-center px-8'}>
        {selectedLanguage === 'en' ? (
          <TermsAndCondition
            showModal={isTermsDialogVisible}
            setShowModal={() => setTermsDialog(false)}
            dialogText={''}
            onClick={onHandleClick}
          />
        ) : (
          <TermsAndConditionAR
            showModal={isTermsDialogVisible}
            setShowModal={() => setTermsDialog(false)}
            dialogText={''}
            onClick={onHandleClick}
          />
        )}
        <div className="group m-10 p-5 w-full  text-white  bg-primary rounded-2xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 content-center">
            <div className="my-2">
              <div className="my-2 relative rounded-sm shadow-sm  ">
                {purchaseFiberPlan?.payViaSadad?.sadadText}
              </div>
            </div>
          </div>
          <div className="flex  items-center ">
            <div className="form-control flex flex-row">
              <label className="label" onClick={showTermsDialog}>
                <input
                  type="checkbox"
                  value=""
                  checked={isAgreed}
                  className="checkbox checkbox-accent cursor-pointer"
                />
                <span className="text-base md:text-lg mr-1  text-white px-2">
                  {purchaseFiberPlan?.acceptSalam}
                  <span className=" text-accent cursor-pointer">
                    {purchaseFiberPlan?.termsConditions}
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-end  my-10">
            <span className="text-center text-md text-slate-400">
              {purchaseFiberPlan?.payingDeposit}
              <span className="text-lg text-white text-red-50">
                {' '}
                {planPrice}
              </span>
            </span>
          </div>

          <div className="w-40 my-3 flex float-right">
            <StadiumButton
              onClick={handleClick}
              newClass={`${
                isAgreed ? 'AddedBtnBgColor onFilledStyle' : 'removedBtnBgColor'
              }`}
              disabled={isAgreed ? false : true}
              text={confirm}
            />
          </div>
        </div>
        {/* <Toaster /> */}
      </div>
    </>
  );
}
