'use client';

/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect, useContext } from 'react';
import NoticeCard from '../../components/noticeCard';
//import Images from '../../../../resource/images';
import CreditDebit from './creditDebit';
import PayViaSadad from './payViaSadad';
import fiberPendingNewOrder from '../../dataMassaging/fiberPlans/fiberPendingNewOrder';
import AppContext from '../../AppContext';
import { AlertContext } from '../../context/alertContext/AlertContext';
import { useRouter } from 'next/navigation';
import AppRoutes from '../../constants/appRoutes';
import Image from 'next/image';
import Images from '../../components/images';
import { getFiberRoutKey } from '../../constants/routeNavigationAccountState';
import backRestrict from '../utilities/backRestrict';

export default function PurchaseFiberPlans() {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const {
    page: { purchaseFiberPlan },
  } = value.state.languages;

  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const navigation = useRouter();

  const [planPrice, setPlanPrice] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';

  useEffect(() => {
    backRestrict();
    (async () => {
      if (orderId) {
        const { status, msg, data } = await fiberPendingNewOrder(
          `${orderId}`,
          '200_state_payment'
        );

        if (status) {
          setPlanPrice(`${data?.selectedPlan?.price}` || '');
          setFirstName(`${data?.firstName}` || '');
          setLastName(`${data?.lastName}` || '');
        } else {
          setOpen(true);
          setAlertMsg(msg || 'Error while fetching your order');
          setSeverity('error');
          navigation.push(AppRoutes.selectFiberPlan);
        }
      }
    })();
  }, [orderId]);

  const tabsData = [
    {
      label: purchaseFiberPlan?.differentCardTypes,
      content: <CreditDebit planPrice={planPrice} />,
    },
    {
      label: purchaseFiberPlan?.sadad,
      content: <PayViaSadad planPrice={planPrice} />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const isPlanSelected = useAppSelector(selectedFiberPlan);
  // if (isPlanSelected == null) {
  //   return <Navigate to="/" />
  // }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex  flex-col dyn-mt items-stretch md:w-[60%]">
          <NoticeCard
            text={`${purchaseFiberPlan?.hi} ${firstName} ${lastName}, ${purchaseFiberPlan?.paymentHeaderNotificaion}`}
          ></NoticeCard>
        </div>
        <div className="flex  flex-col dyn-mt dyn-card-margin md:w-[55%]">
          {/* <div>
            <NoticeCard text="Hi Ahmed Mohammed, thanks for verifying your details!"></NoticeCard>
          </div> */}
          <div className="flex items-center  ">
            <div className="pl-8 md:pl-0  md:text-lg text-base font-bold py-4">
              {purchaseFiberPlan?.purchaseDeposit}
            </div>

            <Image
              className=" w-8 h-8"
              src={Images.complain}
              alt="icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="flex items-center flex-col dyn-card-width justify-center ">
          <div className="flex border-b items-center w-full justify-center gap-8 md:gap-40 mx-12">
            {/* Loop through tab data and render button for each. */}
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  className={`${
                    idx === activeTabIndex && 'font-semibold'
                  } py-2  text-base md:text-xl  border-b-4 transition-all duration-300  ${
                    idx === activeTabIndex
                      ? 'border-black '
                      : 'border-transparent hover:border-gray-200'
                  }`}
                  // Change the active tab on click.
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          {/* Show active tab content. */}
          <div className=" transition-all w-full">
            {tabsData[activeTabIndex].content}
          </div>
        </div>
      </div>
    </div>
  );
}
