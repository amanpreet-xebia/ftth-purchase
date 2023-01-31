'use client';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Disclosure } from '@headlessui/react';
import React, { useEffect, useContext, useState } from 'react';
import AppRoutes from '../constants/appRoutes';
import { useRouter } from 'next/router';
import { FiberPlanDTO } from '../interface/types';
import { AuthTokenContext } from '../context/AuthToken';
import fiberPendingNewOrder from '../dataMassaging/fiberPlans/fiberPendingNewOrder';
import { AlertContext } from '../context/alertContext/AlertContext';
import { imageByAdonType } from '@/dataMassaging/common/fiberPlanFeatureMap';

const SelectedFiberPlanDropdown = () => {
  //const selectedPlan = useAppSelector(selectedFiberPlan);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const router = useRouter();
  const { orderDetails } = useContext(AuthTokenContext);

  useEffect(() => {
    if (orderDetails && orderDetails?.length !== 0) {
      setSelectedPlan(orderDetails);
    }
  }, [orderDetails]);

  return (
    <div className="md:hidden">
      <div className=" bg-white z-40">
        {selectedPlan == null ? null : (
          <SelectedPlans plan={selectedPlan}></SelectedPlans>
        )}
      </div>
    </div>
  );
};

export const SelectedPlans = (props: SelectedPlanProps) => {
  const selectedPlan = (open: boolean) => (
    <div className=" bg-accent">
      <div className="py-4 px-2 bg-secondaryColor justify-center">
        <div className="group flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-8 w-8 ml-2 text-white `}
            fill="none"
            color="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p className="text-white ml-5 text-2xl font-bold ">
            {props.plan.price ?? '--'}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full bg-white">
            {selectedPlan(open)}
          </Disclosure.Button>
          <Disclosure.Panel className="h-100 bg-accent p-[2px] rounded-b-xl">
            <div className="h-2/4 bg-white rounded-b-xl">
              {/* {props.plan.addedValue?.map((addon, i) => {
                const layoutStyle = ' border-b border-gray-300';
                return (
                  <div
                    className={i + 1 === props.plan.addedValue?.length ? '' : layoutStyle}
                    key={i}>
                    <PlanCustomiztionLayout
                      addonType={addon}
                      price={`${props.plan.price}`}></PlanCustomiztionLayout>
                  </div>
                );
                
              }
              
              )} */}
              <div className="border-b">
                <PlanCustomiztionLayout
                  addonType={props?.plan?.addedValue?.[0]}
                  price={`${props.plan.price}`}
                  name={props.plan.name}
                  description={props.plan.description}
                  plantype={
                    props.plan.planType === 'prepaid' ? 'PREPAID' : 'POSTPAID'
                  }
                />
              </div>
              {props.plan.addons?.[0] && (
                <div className="ml-[10px]">
                  <PlanCustomiztionLayout
                    addonType={props?.plan?.addons?.[0]?.type}
                    price={`${props.plan.addons?.[0].price}`}
                    name={props.plan.addons?.[0].title}
                    description={props.plan.addons?.[0].desc}
                    plantype="ADD-ONS"
                    imgHeight="50"
                    imgWidth="50"
                  />
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const PlanCustomiztionLayout = (props: any) => {
  const addonPostPaidType = props.addonType === 'salam_plan11';
  const navigator = useRouter();
  const navigateToAddons = () => {
    if (props.addonType === 'salam_plan33') {
      navigator.push('/select-addons');
    }
  };
  return (
    <div className=" py-4 px-4 flex flex-row ">
      <div className="px-3 content-start ">
        <img
          src={imageByAdonType(props.addonType).default.src}
          alt=""
          width={props?.imgWidth ?? 70}
          height={props?.imgHeight ?? 70}
        />
      </div>
      <div className="w-full">
        <div className="font-medium  text-xs tracking-normal">
          {props.plantype}
        </div>
        <div className="font-bold text- tracking-normal">{props.name}</div>
        <div className=" text-gray-500 font-thin text-sm tracking-normal">
          {props.description}
        </div>
        {/* <button
          className=" text-accent font-light text-sm underline py-4"
          onClick={() => navigateToAddons()}>
          {editLabelByAdonType(props.addonType)}
        </button> */}
      </div>
      <div className="  text-gray-500 gap-1">
        <div className="flex text-xl gap-1">
          <span>{props.price}</span>
        </div>
      </div>
    </div>
  );
};

interface FiberAddonTypeProps {
  addonType: string;
  price?: string | null;
}

interface SelectedPlanProps {
  plan: FiberPlanDTO;
}

export default SelectedFiberPlanDropdown;
