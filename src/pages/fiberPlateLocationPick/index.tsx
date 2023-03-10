'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DropDownItem } from '../../components/dropdownSelector';
import AppRoutes from '../../constants/appRoutes';

import fiberNewOrder from '../../dataMassaging/fiberPlans/fiberNewOrder';
import fiberPendingNewOrder from '../../dataMassaging/fiberPlans/fiberPendingNewOrder';
import { fiberOrderStatesRoute } from '../../constants/routeNavigationAccountState';
import FindPlateNumber from '../../components/dialog/findPlateNumber';
import StadiumButton from '../../components/stadiumButton';
import InputField from '../../components/inputField';
import AppContext from '../../AppContext';
import Label, { LabelStyle } from '../../components/Label';
import SelectComponent from '../../dataMassaging/common/SelectComponent';
import { AuthTokenContext } from '../../context/AuthToken';
import { AlertContext } from '../../context/alertContext/AlertContext';
import backRestrict from '../utilities/backRestrict';

export default function fiberPlateLocationPick() {
  const value = useContext(AppContext);
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const { locale } = value.state;
  const storedPlanId =
    typeof window !== 'undefined' ? localStorage.getItem('planId') : '';
  const { orderDetails } = useContext(AuthTokenContext);

  const storedOrderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  const {
    page: { fiberPlateLocation },
    next,
    typeHere,
  } = value.state.languages;
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [plateId, setPlateId] = useState<any>(null);
  const [period, setPeriod] = useState<any>(null);
  const navigator = useRouter();

  useEffect(() => {
    backRestrict();
    if (!localStorage.getItem('planId')) {
      window.location.href = `${process.env.SALAM_URL}${
        locale || 'en'
      }/personal`;
    }
  }, [navigator]);

  const providerItems: DropDownItem[] = [
    {
      key: 'ITC',
      value: 'ITC',
      label: 'ITC',
      labelAr: '????????',
    },
    {
      key: 'DAWIYAT',
      value: 'DAWIYAT',
      label: 'DAWIYAT',
      labelAr: '????????????',
    },
    {
      key: 'STC',
      value: 'STC',
      label: 'STC',
      labelAr: 'STC',
    },
    {
      key: 'MOBILY',
      value: 'MOBILY',
      label: 'MOBILY',
      labelAr: '???????? ??????',
    },
  ];

  const periodItems: DropDownItem[] = [
    {
      key: '3',
      value: '3',
      label: '3 Months',
      labelAr: '3 ????????',
    },
    {
      key: '6',
      value: '6',
      label: '6 Months',
      labelAr: '6 ????????',
    },
    {
      key: '12',
      value: '12',
      label: '12 Months',
      labelAr: '12 ????????',
    },
  ];

  const onPlateIdChanged = (value: string) => {
    setPlateId(value);
  };

  const createNewOrder = async () => {
    const plateCheck = await fiberNewOrder(
      period,
      selectedProvider,
      `${storedPlanId}`,
      plateId,
      '1',
      `${storedOrderId}`
    );
    if (plateCheck?.code === 200) {
      const pendingOrder = await fiberPendingNewOrder(
        `${storedOrderId}`,
        '200_state_account_creation'
      );

      if (pendingOrder.data?.state?.trim()) {
        navigator.push(fiberOrderStatesRoute(pendingOrder.data?.state));
        if (typeof window !== 'undefined') {
          localStorage.setItem('state', pendingOrder.data?.state);
        }
        return;
      } else {
        navigator.push(AppRoutes.fiberRegistration);
      }
    } else {
      setOpen(true);
      setAlertMsg(plateCheck.msg);
      setSeverity('error');
    }
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
  };
  const onProviderChange = (item: any) => {
    setSelectedProvider(item);
  };
  const onPeriodChange = (item: any) => {
    setPeriod(item);
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
            {orderDetails.planType === 'prepaid' && (
              <div>
                <Label label={fiberPlateLocation?.yourPeriod}></Label>
                <SelectComponent
                  handleEventChange={onPeriodChange}
                  availableOption={periodItems}
                  placeholder={fiberPlateLocation?.selectYourPeriodHere}
                  // className="selectDropDown"
                  className={`selectDropDown ${
                    locale === 'ar' ? 'text-left' : ''
                  }`}
                  dir={locale ? 'rtl' : ''}
                />
              </div>
            )}
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
