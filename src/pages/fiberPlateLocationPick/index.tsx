'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DropDownItem } from '../../components/dropdownSelector';
import AppRoutes from '../../constants/appRoutes';

import fiberNewOrder from '../../dataMassaging/fiberPlans/fiberNewOrder';
import fiberPendingNewOrder from '../../dataMassaging/fiberPlans/fiberPendingNewOrder';
import {
  fiberOrderStatesRoute,
  getFiberRoutKey,
} from '../../constants/routeNavigationAccountState';
import FindPlateNumber from '../../components/dialog/findPlateNumber';
import StadiumButton from '../../components/stadiumButton';
import InputField from '../../components/inputField';
import AppContext from '../../AppContext';
import Label, { LabelStyle } from '../../components/Label';
import SelectComponent from '../../dataMassaging/common/SelectComponent';
// import './creditDebitStyle.css';
import { AuthTokenContext } from '../../context/AuthToken';
import { AlertContext } from '../../context/alertContext/AlertContext';
import backRestrict from '../utilities/backRestrict';

export default function fiberPlateLocationPick() {
  const value = useContext(AppContext);
  const { setOrderID } = useContext(AuthTokenContext);
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const { locale } = value.state;
  const storedPlanId =
    typeof window !== 'undefined' ? localStorage.getItem('planId') : '';
  const storedOrderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  const {
    page: { fiberPlateLocation },
    next,
    typeHere,
  } = value.state.languages;
  // const { setAuthToken, setOrderID } = useContext(AuthTokenContext);
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [plateId, setPlateId] = useState<any>(null);

  const navigator = useRouter();

  useEffect(() => {
    // if (
    //   localStorage.getItem('state') !==
    //   getFiberRoutKey(AppRoutes.fiberPlateLocationPick)
    // )
    //   window.history.forward();
    backRestrict(AppRoutes.fiberPlateLocationPick);
    if (!localStorage.getItem('planId')) {
      window.location.href = `https://salam.sa/${locale || 'en'}/personal`;
    }
  }, [navigator]);

  const providerItems: DropDownItem[] = [
    {
      key: fiberPlateLocation?.dropdownOpt?.ITC,
      value: fiberPlateLocation?.dropdownOpt?.ITC,
      label: fiberPlateLocation?.dropdownOpt?.ITC,
    },
    {
      key: fiberPlateLocation?.dropdownOpt?.DAWIYAT,
      value: fiberPlateLocation?.dropdownOpt?.DAWIYAT,
      label: fiberPlateLocation?.dropdownOpt?.DAWIYAT,
    },
    {
      key: fiberPlateLocation?.dropdownOpt?.STC,
      value: fiberPlateLocation?.dropdownOpt?.STC,
      label: fiberPlateLocation?.dropdownOpt?.STC,
    },
    {
      key: fiberPlateLocation?.dropdownOpt?.MOBILY,
      value: fiberPlateLocation?.dropdownOpt?.MOBILY,
      label: fiberPlateLocation?.dropdownOpt?.MOBILY,
    },
  ];

  const onPlateIdChanged = (value: string) => {
    setPlateId(value);
  };

  const createNewOrder = async () => {
    const { status, msg, code, data } = await fiberNewOrder(
      selectedProvider,
      `${storedPlanId}`,
      plateId,
      '1',
      `${storedOrderId}`
    );
    // if (data?.orderId && status && code === 200) {
    const pendingOrder = await fiberPendingNewOrder(
      `${storedOrderId}`,
      '200_state_account_creation'
    );

    // const routeData = {
    //   state: { orderId: data?.orderId, token: data?.token }
    // };

    // setOrderID(`${data?.orderId}`);

    // localStorage.setItem('token', data?.token || '');
    // localStorage.setItem('orderId', `${data?.orderId}` || '');

    if (pendingOrder.data?.state?.trim()) {
      navigator.push(fiberOrderStatesRoute(pendingOrder.data?.state));
      localStorage.setItem('state', pendingOrder.data?.state);
      return;
    } else {
      navigator.push(AppRoutes.fiberRegistration);
    }
    // } else {
    //   setOpen(true);
    //   setAlertMsg(msg);
    //   setSeverity('error');
    // }
  };

  const verifyPlateLocationService = async () => {
    if (selectedProvider === null) {
      setOpen(true);
      setAlertMsg('Please select operator provider');
      setSeverity('error');
      return;
    }
    if (plateId === null) {
      setOpen(true);
      setAlertMsg('Enter a valid plate id');
      setSeverity('error');
      return;
    }

    createNewOrder();

    // const { status, code, data } = await fiberPlanServicable(
    //   selectedProvider,
    //   `${selectedPlan!.id}`,
    //   plateId
    // );
    // if (status && code === SUCCESS) {
    //   createNewOrder(data!);
    //   return;
    // } else if (code === NOT_FOUND) {
    //   navigator.push(AppRoutes.fiberUnavailable);
    // } else {
    //   setOpen(true);
    //   setAlertMsg(data?.message || 'Error while getting your fiber plan availabliltiy');
    //   setSeverity('error');
    // }
  };
  const onProviderChange = (item: any) => {
    setSelectedProvider(item);
  };

  return (
    <div className=" w-full overflow-y-scroll grid  place-items-center dyn-card-margin text-white">
      <div className=" w-full md:w-5/6 lg:w-3/5 xl:w-1/2 bg-salam-blue dyn-mt dyn-card-pading rounded-2xl ">
        <Label
          label={fiberPlateLocation?.enterPlateDetails}
          style={LabelStyle.labelLarge}
        ></Label>

        <div className="pt-6 pb-2  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label label={fiberPlateLocation?.yourOperator}></Label>
              <SelectComponent
                handleEventChange={onProviderChange}
                availableOption={providerItems}
                placeholder={fiberPlateLocation?.selectYourProviderHere}
                // className="selectDropDown"
                className={`selectDropDown ${
                  locale === 'ar' ? 'text-left' : ''
                }`}
                dir={locale ? 'rtl' : ''}
              />
            </div>
            <div>
              <Label label={fiberPlateLocation?.yourPlate}></Label>
              <InputField
                handleInputChange={onPlateIdChanged}
                key="plateId"
                placeholder={typeHere}
              />
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
      <div className=" mt-10 md:mt-14 text-center tracking-wide text-accent">
        <h6>{fiberPlateLocation?.cantFindYourLocationOnYourPhone}</h6>
        <FindPlateNumber title={fiberPlateLocation?.findYourPlateNumber}>
          <h6 className="  py-5 underline">
            {fiberPlateLocation?.clickFindPlate}
          </h6>
        </FindPlateNumber>
      </div>
    </div>
  );
}
