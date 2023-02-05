'use client';

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import InputComponent from '../../components/inputComponent';
import InputField from '../../components/inputField';
import StadiumButton from '../../components/stadiumButton';
import TermsAndCondition from '../../components/dialog/termsCondition';
import TermsAndConditionAR from '../../components/dialog/termsCondition_ar';
import DropDownSelector, {
  DropDownItem,
} from '../../components/dropdownSelector';
import AppRoutes from '../../constants/appRoutes';
import DatePickerComp from '../../dataMassaging/common/DatePicker';
import SelectComponent from '../../dataMassaging/common/SelectComponent';
import checkEmptyVal from '../../dataMassaging/common/checkEmptyVal';
// import { AlertContext } from '../../../../context/alertContext/AlertContext';
import fiberPendingNewOrder from '../../dataMassaging/fiberPlans/fiberPendingNewOrder';
import moment from 'moment';
import payFiberPlan from '../../dataMassaging/fiberPlans/payFiberPlan';
import { Box } from '@mui/material';
// import '../../styles/creditDebitStyle.css';
import {
  fiberOrderStatesRoute,
  getFiberRoutKey,
} from '../../constants/routeNavigationAccountState';
// import { useTranslation } from 'react-i18next';
import AppContext from '../../AppContext';
import { AlertContext } from '../../context/alertContext/AlertContext';
import { AuthTokenContext } from '../../context/AuthToken';

export default function CreditDebit({ planPrice }: any) {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const {
    page: { purchaseFiberPlan },
    typeHere,
    confirm,
  } = value.state.languages;
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const { orderDetails } = useContext(AuthTokenContext);
  const [isTermsDialogVisible, setTermsDialog] = useState(false);
  const navigate = useRouter();
  const [isAgreed, setIsAgreed] = useState(false);
  const [selectedMonthYear, setSelectedMonthYear] = useState('');
  const [selectedCardOpt, setSelectedCartOpt] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardHolderNumber, setCardHolderNumber] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [errorMsgListRes, setErrorMsgListRes] =
    useState<Record<string, string>>();
  // const selectorPlan = useAppSelector(selectedFiberPlan);

  // const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  // const { t } = useTranslation();
  // const token = localStorage.getItem('token');
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  const cardOptions = [
    {
      key: purchaseFiberPlan?.creditDebit?.visa,
      value: purchaseFiberPlan?.creditDebit?.visa,
      label: purchaseFiberPlan?.creditDebit?.visa,
    },
    {
      key: purchaseFiberPlan?.creditDebit?.american_express,
      value: purchaseFiberPlan?.creditDebit?.american_express,
      label: purchaseFiberPlan?.creditDebit?.american_express,
    },
    {
      key: purchaseFiberPlan?.creditDebit?.mastercard,
      value: purchaseFiberPlan?.creditDebit?.mastercard,
      label: purchaseFiberPlan?.creditDebit?.mastercard,
    },
  ];

  const handleClick = async () => {
    if (isAgreed) {
      const paymentDetails = {
        payment_type: 'cc',
        cc_type: selectedCardOpt,
        cc_name: cardHolderName,
        cc_number: cardHolderNumber,
        cc_mm: moment(selectedMonthYear).format('MM'),
        cc_yy: moment(selectedMonthYear).format('YY'),
        cc_cvv: cardCVV,
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
          localStorage.setItem(
            'state',
            getFiberRoutKey(AppRoutes.bookAppointment)
          );
        }
      } else {
        setOpen(true);
        setAlertMsg('Error while fetching your order');
        setSeverity('error');
        if (JSON.stringify(errors) !== '{}') {
          setErrorMsgListRes(errors);
        }
      }
    } else {
      return false;
    }
  };

  const showTermsDialog = () => {
    // if (
    //   !checkEmptyVal({
    //     cardHolderName,
    //     cardHolderNumber,
    //     selectedMonthYear,
    //     selectedCardOpt,
    //     cardCVV
    //   })
    // ) {
    //   setOpen(true);
    //   setAlertMsg('All fields are mandatory, must be filled out');
    //   setSeverity('error');
    //   return false;
    // }

    setIsAgreed((prev) => {
      if (!prev) {
        setTermsDialog(true);
      }
      return false;
    });
  };

  const onHandleClick = (isAccepted: boolean) => {
    setIsAgreed(isAccepted);
    setTermsDialog(false);
  };

  const onCardTypeSelected = (cardSelectedVal: any) => {
    setSelectedCartOpt(cardSelectedVal);
  };

  const handleCardholderName = (cardName: any) => {
    setCardHolderName(cardName);
  };

  const handleCardholderNumber = (cardNumber: any) => {
    const v = cardNumber
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    setCardHolderNumber(parts.length > 1 ? parts.join(' ') : cardNumber);
  };

  const dateHandler = (currentDate: any) => {
    const dateFormated = new Date(currentDate);
    setSelectedMonthYear(moment(dateFormated).format());
  };

  const handleCardCVV = (number: any) => {
    setCardCVV(number);
  };

  const selectedLanguage = locale || 'en';
  const redirectUrl = `${process.env.SALAM_URL}${selectedLanguage}/support/terms-conditions`;

  return (
    <>
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

      <div className={'  flex flex-col items-center px-8'}>
        <div className="group m-10 p-5 w-full  text-white  bg-primary rounded-2xl ">
          {errorMsgListRes && (
            <div className="border-solid rounded-md border-rose-200 bg-rose-200 p-3 pl-4">
              <ul className="list-disc text-red-900 pl-2">
                {errorMsgListRes?.['cc_type']?.[0] && (
                  <li>{errorMsgListRes['cc_type'][0]}</li>
                )}
                {errorMsgListRes?.['cc_number']?.[0] && (
                  <li>{errorMsgListRes['cc_number'][0]}</li>
                )}
                {errorMsgListRes?.['cc_name']?.[0] && (
                  <li>{errorMsgListRes['cc_name'][0]}</li>
                )}
                {errorMsgListRes?.['cc_mm']?.[0] && (
                  <li>{errorMsgListRes['cc_mm'][0]}</li>
                )}
                {errorMsgListRes?.['cc_yy']?.[0] && (
                  <li>{errorMsgListRes['cc_yy'][0]}</li>
                )}
                {errorMsgListRes?.['cc_cvv']?.[0] && (
                  <li>{errorMsgListRes['cc_cvv'][0]}</li>
                )}
              </ul>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 content-center">
            <div>
              <p className="text-sm md:text-lg my-2">
                {purchaseFiberPlan?.creditDebit?.cardType}
              </p>
              {/* <DropDownSelector onItemSelected={onCardTypeSelected}></DropDownSelector> */}
              <SelectComponent
                handleEventChange={onCardTypeSelected}
                availableOption={cardOptions}
                className={`selectDropDown ${
                  locale === 'ar' ? 'text-left' : ''
                }`}
                placeholder={purchaseFiberPlan?.creditDebit?.selectCardType}
              />
            </div>

            <div className="my-2">
              <label
                htmlFor="price"
                className="block text-sm md:text-lg font-medium text-white-700 truncate text-start"
              >
                {purchaseFiberPlan?.creditDebit?.cardNumber}
              </label>
              <div className="my-2 relative rounded-sm shadow-sm  ">
                <InputField
                  handleInputChange={handleCardholderNumber}
                  key={purchaseFiberPlan?.creditDebit?.cardNumber}
                  placeholder="0000 0000 0000"
                  value={cardHolderNumber}
                  dir={locale && 'ltr'}
                  style={{
                    textAlign: locale === 'ar' ? 'right' : 'left',
                  }}
                />
              </div>
            </div>

            <div className="my-2">
              <label
                htmlFor="price"
                className="block text-sm md:text-lg font-medium text-white-700 truncate text-start"
              >
                {purchaseFiberPlan?.creditDebit?.cardholderName}
              </label>
              <div className="my-2 relative rounded-sm shadow-sm  ">
                <InputField
                  handleInputChange={handleCardholderName}
                  key={purchaseFiberPlan?.creditDebit?.cardholderName}
                  placeholder={typeHere}
                />
              </div>
            </div>

            <div className=" flex gap-3 items-stretch">
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm md:text-lg font-medium text-white-700 truncate text-start"
                >
                  {purchaseFiberPlan?.creditDebit?.expiring_date}
                </label>

                <div className="my-2 relative rounded-sm shadow-sm  ">
                  <DatePickerComp
                    onEventChange={dateHandler}
                    inputFormat="MM/YY"
                    className="datePickerStyleCreditCard"
                    // views={['month', 'year']}
                    disablePast
                    dir={locale && 'ltr'}
                    style={{
                      textAlign: locale === 'ar' ? 'right' : 'left',
                    }}
                  />
                </div>
              </div>
              <div className="my-2">
                <label
                  htmlFor="price"
                  className="block text-sm md:text-lg font-medium text-white-700 truncate text-start"
                >
                  {purchaseFiberPlan?.creditDebit?.cvv}
                </label>
                <div className="my-2 relative rounded-sm shadow-sm  ">
                  <InputField
                    handleInputChange={handleCardCVV}
                    key="Cardholder Name"
                    placeholder={typeHere}
                    maxLength={3}
                    dir={locale && 'ltr'}
                    style={{
                      textAlign: locale === 'ar' ? 'right' : 'left',
                    }}
                  />
                </div>
              </div>

              {/* <img
                className="object-contain mt-4"
                alt="card - cvv"
                src={require('../../assets/images/card_cvv.png')}></img> */}
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
              {' '}
              {orderDetails.planType === 'prepaid'
                ? purchaseFiberPlan?.payingDepositPrepaid
                : purchaseFiberPlan?.payingDeposit}
              <span className="text-lg text-white"> {planPrice}</span>
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
