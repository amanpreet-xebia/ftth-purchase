'use client';
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState, useContext, useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';
// import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import InputField from '../../components/inputField';
import Label, { LabelStyle } from '../../components/Label';
import NoticeCard from '../../components/noticeCard';
import StadiumButton from '../../components/stadiumButton';
import AppRoutes from '../../constants/appRoutes';
import checkEmptyVal from '../../dataMassaging/common/checkEmptyVal';
// import { AlertContext } from '../context/alertContext/AlertContext';
// import { UserStateContext } from '../context/UserStateContext';
import createAccount from '../../dataMassaging/fiberReg/createAccount';
// import { NewOrderRouteState } from '.../.../location/slice/types';
import { fiberOrderStatesRoute } from '../../constants/routeNavigationAccountState';
import { useRouter } from 'next/navigation';
import AppContext from '../../AppContext';
import { AlertContext } from '../../context/alertContext/AlertContext';
import fiberNewOrder from '../../dataMassaging/fiberPlans/fiberNewOrder';
import { AuthTokenContext } from '../../context/AuthToken';

const fiberRegistration = () => {
  const context = useContext(AppContext);
  const { locale } = context.state;
  const redBorderStyle =
    'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-red-700 focus:border-red-500  dark:text-red-500 dark:placeholder-red-500 dark:border-red-500';
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const { setOrderID } = useContext(AuthTokenContext);
  const [orderId, setOrderId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const [errorMsgListRes, setErrorMsgListRes] =
    useState<Record<string, string>>();
  const [userId, setUserId] = useState('');
  // const { state } = useLocation();

  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  const navigate = useRouter();
  let storedPlanId = '';
  if (typeof window !== 'undefined') {
    storedPlanId = localStorage.getItem('planId') || '';
  }

  // const createNewOrder = async () => {
  //   const { status, msg, code, data } = await fiberNewOrder(
  //     '',
  //     `${localStorage.getItem('planId')}`,
  //     '',
  //     '1',
  //     `${localStorage.getItem('orderId')}`
  //   );
  //   if (data?.orderId && status && code === 200) {
  //     setOrderId(`${data?.orderId}`);
  //     setOrderID(`${data?.orderId}`);

  //     localStorage.setItem('token', data?.token || '');
  //     localStorage.setItem('orderId', `${data?.orderId}` || '');

  //     if (true) {
  //       // debugger;
  //       navigate.push(fiberOrderStatesRoute(data?.state));
  //       return;
  //     } else {
  //       navigate.push(AppRoutes.fiberRegistration);
  //     }
  //   } else {
  //     setOpen(true);
  //     setAlertMsg(msg);
  //     setSeverity('error');
  //   }
  // };

  // useEffect(() => {
  //   createNewOrder();
  // }, []);

  // const { t } = useTranslation();

  // useEffect(() => {
  //   (async () => {
  //     console.log('lllll', await getUserDetails());
  //   })();
  // }, []);
  const registerFiberPlan = async () => {
    // if (!checkEmptyVal({ firstName, lastName, mobileNumber, email, userId })) {
    //   setOpen(true);
    //   setAlertMsg('Fields with asterisk(*) sign are required, must be filled out');
    //   setSeverity('error');
    //   return false;
    // }
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token || '');
    }
    const { status, msg, data, errors } = await createAccount({
      orderId,
      userDetails: {
        firstName,
        lastName,
        mobile: mobileNumber,
        email,
        id: userId,
        workflow_version: 1,
        planId: storedPlanId,
      },
    });
    if (status) {
      const routeData = {
        state: { orderId: orderId, token: token },
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('orderId', data?.orderId?.toString() || '');
      }
      console.log(data);

      if (data?.state?.trim()) {
        navigate.push(fiberOrderStatesRoute(data?.state));
        return;
      } else {
        navigate.push(AppRoutes.phoneVerification);
      }
    } else {
      setOpen(true);
      setAlertMsg(msg || 'Error while fetching your order');
      setSeverity('error');
      setErrorMsgListRes(errors);
    }
  };

  const handleFirstName = (value: any) => {
    setFirstName(value);
  };

  const handleLastName = (value: any) => {
    setLastName(value);
  };

  const handleMobileNumber = (value: any) => {
    setMobileNumber(value);
  };

  const handleEmail = (value: any) => {
    setEmail(value);
  };

  const handleUserId = (value: any) => {
    setUserId(value);
  };

  // if (!(orderId || token)) {
  //   return <Navigate to={'/'} replace={true}></Navigate>;
  // }
  const value = useContext(AppContext);

  const {
    page: {
      availableRegistration,
      registerationHeaderNotification,
      enterDetails,
    },
    next,
    typeHere,
  } = value.state.languages;
  return (
    <div className="mt-0">
      <div className={'flex flex-col'}>
        <div className=" dyn-card-margin dyn-card-width w-full  self-center dyn-mt"></div>
        <div className=" w-full  grid  place-items-center dyn-card-margin text-white">
          <div className="flex  flex-col dyn-mt items-stretch md:w-[70%]">
            <NoticeCard text={registerationHeaderNotification}></NoticeCard>
          </div>
          <div className=" dyn-card-width bg-salam-blue dyn-mt dyn-card-pading rounded-2xl ">
            {errorMsgListRes && Object.keys(errorMsgListRes).length > 0 && (
              <div className="border-solid rounded-md border-rose-200 bg-rose-200 p-3 pl-4">
                <ul className="list-disc text-red-900 pl-2">
                  {errorMsgListRes?.['firstName']?.[0] && (
                    <li>{errorMsgListRes['firstName'][0]}</li>
                  )}
                  {errorMsgListRes?.['lastName']?.[0] && (
                    <li>{errorMsgListRes['lastName'][0]}</li>
                  )}
                  {errorMsgListRes?.['id']?.[0] && (
                    <li>{errorMsgListRes['id'][0]}</li>
                  )}
                  {errorMsgListRes?.['mobile']?.[0] && (
                    <li>{errorMsgListRes['mobile'][0]}</li>
                  )}
                  {errorMsgListRes?.['email']?.[0] && (
                    <li>{errorMsgListRes['email'][0]}</li>
                  )}
                </ul>
              </div>
            )}

            <Label
              label={`${enterDetails}`}
              style={LabelStyle.labelLarge}
            ></Label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <Label label={`${availableRegistration?.firstName}`}></Label>
                <InputField
                  handleInputChange={handleFirstName}
                  key={`${availableRegistration?.firstName}`}
                  placeholder={`${typeHere}`}
                  className={
                    errorMsgListRes?.['firstName']?.[0]
                      ? 'dyn-error-input-field'
                      : 'dyn-success-input-field'
                  }
                />
              </div>
              <div>
                <Label label={`${availableRegistration?.lastName}`}></Label>
                <InputField
                  handleInputChange={handleLastName}
                  key={`${availableRegistration?.lastName}`}
                  placeholder={`${typeHere}`}
                  className={
                    errorMsgListRes?.['lastName']?.[0]
                      ? 'dyn-error-input-field'
                      : 'dyn-success-input-field'
                  }
                />
              </div>
              <div>
                <Label label={`${availableRegistration?.idNumber}`}></Label>
                <InputField
                  handleInputChange={handleUserId}
                  key={`${availableRegistration?.idNumber}`}
                  placeholder={`${typeHere}`}
                  className={
                    errorMsgListRes?.['id']?.[0]
                      ? 'dyn-error-input-field'
                      : 'dyn-success-input-field'
                  }
                />
              </div>
              <div>
                <Label label={`${availableRegistration?.mobileNumber}`}></Label>
                <InputField
                  handleInputChange={handleMobileNumber}
                  key={`${availableRegistration?.mobileNumber}`}
                  placeholder={`${typeHere}`}
                  className={
                    errorMsgListRes?.['mobile']?.[0]
                      ? 'dyn-error-input-field'
                      : 'dyn-success-input-field'
                  }
                  dir={locale && 'ltr'}
                  style={{
                    textAlign: locale === 'ar' ? 'right' : 'left',
                  }}
                />
              </div>
              <div>
                <Label label={`${availableRegistration?.email}`}></Label>
                <InputField
                  handleInputChange={handleEmail}
                  key={`${availableRegistration?.email}`}
                  placeholder={`${typeHere}`}
                  className={
                    errorMsgListRes?.['email']?.[0]
                      ? 'dyn-error-input-field'
                      : 'dyn-success-input-field'
                  }
                  dir={locale && 'ltr'}
                  style={{
                    textAlign: locale === 'ar' ? 'right' : 'left',
                  }}
                />
              </div>
            </div>

            <div className=" flex mt-8 mb-6 md:my-10 w-[138px] float-right">
              <StadiumButton
                text={next}
                onClick={registerFiberPlan}
              ></StadiumButton>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </div>
  );
};

export default fiberRegistration;
