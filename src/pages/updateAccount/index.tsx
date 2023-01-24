'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '../../components/inputField';
import Label, { LabelStyle } from '../../components/Label';
import StadiumButton from '../../components/stadiumButton';
import fiberPendingNewOrder from '../../dataMassaging/fiberPlans/fiberPendingNewOrder';
import updateAccountApi from '../../dataMassaging/fiberReg/updateAccountApi';
import {
  fiberOrderStatesRoute,
  getFiberRoutKey,
} from '../../constants/routeNavigationAccountState';
import NoticeCard from '../../components/noticeCard';
import AppContext from '../../AppContext';
import AppRoutes from '../../constants/appRoutes';
import backRestrict from '../utilities/backRestrict';

const updateAccount = () => {
  const value = useContext(AppContext);
  const {
    page: { updateAcc },
    next,
  } = value.state.languages;
  const navigator = useRouter();
  const [password, setPassword] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>('');
  const [day, setDay] = useState<string | null>('');
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  const onPasswordChanged = (value: string) => {
    setPassword(value);
  };
  const onEmailChange = (value: string) => {
    setEmail(value);
  };
  useEffect(() => {
    backRestrict();

    (async () => {
      const { status, msg, data } = await fiberPendingNewOrder(
        `${orderId}`,
        '200_state_pending'
      );

      if (status) {
        setDay(data?.day || '');
        setEmail(data?.email || '');
      } else {
        // setOpen(true);
        // setAlertMsg(t(msg) || t('error_while_fetching_your_order'));
        // setSeverity('error');
        // navigation(AppRoutes.selectFiberPlan);
      }
    })();
  }, [orderId]);

  const verifyPlateLocationService = async () => {
    // if (password === null || password.trim().length === 0) {
    //   setOpen(true);
    //   setAlertMsg("Password can't be empty");
    //   setSeverity('error');
    //   return;
    // }
    const { status, data } = await updateAccountApi(orderId!, password || '');
    if (status) {
      const routeData = {
        state: { orderId: orderId, token: token },
      };
      navigator.push(fiberOrderStatesRoute(data!.state!));
    } else {
      // setOpen(true);
      // setAlertMsg(t(msg) || t('please_enter_a_valid_otp'));
      // setSeverity('error');
    }
  };

  return (
    <div className=" w-full overflow-y-scroll  grid  place-items-center dyn-card-margin text-white">
      <div className="flex  flex-col dyn-mt items-stretch md:w-[70%]">
        <NoticeCard
          text={`Your appointment is scheduled on ${day}`}
        ></NoticeCard>
      </div>
      <div className=" dyn-card-width bg-primary dyn-mt dyn-card-pading rounded-2xl ">
        <Label
          label={updateAcc?.enterDetails}
          style={LabelStyle.labelLarge}
        ></Label>

        <div className="pt-6 pb-2  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label label={updateAcc?.email}></Label>
              <InputField
                handleInputChange={onEmailChange}
                key="plateId"
              ></InputField>
              {/* <div>
                <h1
                  className="border border-gray-300 
            text-black text-sm rounded-lg bg-[#DCDCDC] block w-full p-3
            py-[14px] md:py-[14px] disabled pointer">
                  {email || ''}
                </h1>
              </div> */}
            </div>
            <div>
              <Label label={updateAcc?.password}></Label>
              <InputField
                handleInputChange={onPasswordChanged}
                key="plateId"
              ></InputField>
            </div>
          </div>
          <div className=" flex my-8 md:my-10 w-[138px] float-right">
            <StadiumButton
              text={next}
              onClick={verifyPlateLocationService}
            ></StadiumButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default updateAccount;
