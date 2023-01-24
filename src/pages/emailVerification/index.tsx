'use client';

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StadiumButton from '../../components/stadiumButton';
import OtpInput from '../../components/otpInput';
import Label, { LabelStyle } from '../../components/Label';
import AppRoutes from '../../constants/appRoutes';
import verifyEmailId from '../../dataMassaging/fiberReg/verifyEmailId';
import { fiberOrderStatesRoute } from '../../constants/routeNavigationAccountState';
import fiberPendingNewOrder from '../../dataMassaging/fiberPlans/fiberPendingNewOrder';
import resendEmailOtp from '../../dataMassaging/fiberReg/resendEmailOtp';
import OtpTimer from 'otp-timer';
import AppContext from '../../AppContext';
import { AlertContext } from '../../context/alertContext/AlertContext';
import backRestrict from '../utilities/backRestrict';

const emailVerification = () => {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const {
    page: { EmailVerification },
    next,
  } = value?.state?.languages || {};

  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);

  const navigation = useRouter();
  const [otp, setOtp] = useState<string>();
  const [registeredEmailId, setRegisteredEmailId] = useState('');
  const [timer, setTimer] = useState(59);
  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';

  useEffect(() => {
    backRestrict();
    (async () => {
      const { status, msg, data } = await fiberPendingNewOrder(
        `${orderId}`,
        '200_state_email_verification'
      );

      if (status) {
        setRegisteredEmailId(data?.email || '');
      } else {
        setOpen(true);
        setAlertMsg(msg || 'Error while fetching your order');
        setSeverity('error');

        navigation.push(AppRoutes.selectFiberPlan);
      }
    })();
  }, [orderId]);

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const onHandleClick = async () => {
    if (otp?.length === 6) {
      const { status, msg, data } = await verifyEmailId(
        orderId!,
        otp.toString()
      );
      if (status) {
        const routeData = {
          state: { orderId: orderId, token: token },
        };
        navigation.push(fiberOrderStatesRoute(data!.state!));
      } else {
        setOpen(true);
        setAlertMsg(msg);
        setSeverity('error');
      }
    } else {
      setOpen(true);
      setAlertMsg('Please enter a valid otp');
      setSeverity('error');
    }
  };

  const handleChange = (code: string) => setOtp(code);

  const resendHandler = async () => {
    const { status, data } = await resendEmailOtp(`${orderId}`, otp || '0');

    if (!status) {
      setOpen(true);
      setAlertMsg('Error while fetching your order');
      setSeverity('error');
    }
  };

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className={'flex flex-col items-center dyn-mt dyn-card-margin'}>
        <div className="group m-10 p-5  dyn-card-width text-white  bg-primary rounded-2xl ">
          <Label
            label={EmailVerification?.verifyDetails}
            style={LabelStyle.labelLarge}
          ></Label>
          <div className="text-base mt-5 text-slate-400 ">
            <span>
              {EmailVerification?.sendOtpEmail}
              <span
                className="text-white font-bold"
                style={{
                  marginRight: locale === 'en' ? '' : '10px',
                }}
              >
                {' '}
                {registeredEmailId}
              </span>
            </span>
          </div>
          <div className="flex my-3 justify-center">
            <OtpInput
              value={otp}
              onChange={handleChange}
              valueLength={6}
              numInputs={6}
              separator={<span style={{ width: '18px' }}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              containerStyle={{ backgroundColor: '#002035', marginTop: '10px' }}
              inputStyle={{
                border: '1px solid white',
                borderRadius: '8px',
                width: '48px',
                height: '48px',
                fontSize: '18px',
                color: 'black',
                fontWeight: '400',
                caretColor: 'white',
                backgroundColor: '#FFFFFF',
              }}
              focusStyle={{
                border: '1px solid white',
                outline: 'none',
              }}
            />
          </div>
          <div className=" md:flex md:flex-row-reverse md:items-center">
            <div className=" md:flex-1 mt-10 md:mt-4 flex justify-center w-full md:justify-end">
              <div className="w-32 ">
                <StadiumButton onClick={onHandleClick} text={next} />
              </div>
            </div>
            <div className=" flex-1  my-10 flex flex-col items-center  md:items-start">
              <div className="flex flex-row timerDiv">
                <p
                  className="inline-block text-sm md:text-base text-slate-400"
                  style={{
                    marginLeft: locale === 'en' ? '' : '10px',
                  }}
                >
                  {EmailVerification?.requestCode}
                </p>
                <OtpTimer
                  minutes={4}
                  seconds={59}
                  background={'none'}
                  buttonColor={'rgb(0 174 66 / var(--tw-text-opacity))'}
                  text=" "
                  ButtonText="Resend"
                  resend={resendHandler}
                  textColor={'rgb(148 163 184 / var(--tw-text-opacity))'}
                  className="inline-block text-sm md:text-base text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default emailVerification;
