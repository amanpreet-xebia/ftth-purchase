'use client';

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StadiumButton from '../../components/stadiumButton';
import OtpInput from '../../components/otpInput';
import Label, { LabelStyle } from '../../components/Label';
import verifyMobileNumber from '../../dataMassaging/fiberReg/verifyMobileNumber';
import { fiberOrderStatesRoute } from '../../constants/routeNavigationAccountState';
import resendMobileOtp from '../../dataMassaging/fiberReg/resendMobileOtp';
import OtpTimer from 'otp-timer';
import AppContext from '../../AppContext';
import { AlertContext } from '../../context/alertContext/AlertContext';
import backRestrict from '../utilities/backRestrict';

const PhoneVerification = () => {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const {
    page: { phoneVerification },
    next,
  } = value.state.languages;

  const navigation = useRouter();
  const [otp, setOtp] = useState<string>();
  const [timer, setTimer] = useState(59);
  const [registeredMobileNumber, setRegisteredMobileNumber] = useState('');
  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';

  useEffect(() => {
    backRestrict();
    setRegisteredMobileNumber(localStorage.getItem('mobileNumber') || '');
  }, []);

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const onHandleClick = async () => {
    if (otp?.length === 6) {
      const { status, msg, data } = await verifyMobileNumber(
        orderId!,
        otp.toString()
      );
      if (status) {
        navigation.push(fiberOrderStatesRoute(data!.state!));
      } else {
        setOpen(true);
        setAlertMsg(msg);
        setSeverity('error');
      }
    } else {
      setOpen(true);
      setAlertMsg('Please enter a valid opt');
      setSeverity('error');
    }
  };

  const handleChange = (code: string) => setOtp(code);

  const resendHandler = async () => {
    const { status } = await resendMobileOtp(`${orderId}`, otp || '0');

    if (!status) {
    }
  };

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className={'flex flex-col items-center dyn-mt dyn-card-margin'}>
        <div className="group m-10 p-5  dyn-card-width text-white  bg-primary rounded-2xl ">
          <Label
            label={phoneVerification?.verifyDetails}
            style={LabelStyle.labelLarge}
          ></Label>
          <div className="text-base mt-5 text-slate-400 ">
            <span>
              {phoneVerification?.sendOtpPhone}
              <span
                className="text-white font-bold"
                style={{
                  marginRight: locale === 'en' ? '' : '10px',
                }}
              >
                {registeredMobileNumber}
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
                  {phoneVerification?.requestCode}
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

export default PhoneVerification;
