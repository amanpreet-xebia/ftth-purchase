'use client';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Disclosure } from '@headlessui/react';
import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppRoutes from '../constants/appRoutes';
import { FiberPlanDTO } from '../interface/types';
import fiberPendingNewOrder from '../dataMassaging/fiberPlans/fiberPendingNewOrder';
import { AuthTokenContext } from '../context/AuthToken';

const SelectedFiberPlanBottomSheet = () => {
  //  const value = useContext(AppContext);
  // let { locale } = value.state;
  // let { page: {phoneVerification}, next, typeHere } = value.state.languages;

  //const selectedPlan = useAppSelector(selectedFiberPlan);
  // const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const { orderID } = useContext(AuthTokenContext);
  console.log('33333333', orderID);

  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const orderId = typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';

      if (orderId) {
        const { status, data = {} } = await fiberPendingNewOrder(
          `${orderId}`,
          '200_state_mobile_verification'
        );
        if (status) {
          // data.selectedPlan = {
          //   ...data?.selectedPlan,
          //   addons: {
          //     type: 'orbit',
          //     title: 'Orbit Familiy Plan',
          //     desc: 'Orbit Family Pack Free Upon Order',
          //     price: 'Free'
          //   }
          // };
          setSelectedPlan(data?.selectedPlan);
        } else {
          // setOpen(true);
          // setAlertMsg(t('error_while_fetching_your_order'));
        }
      }
    })();
  }, [orderID]);

  return (
    <div className="hidden md:block">
      <div className=" bg-white">
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
      <div className="py-7 px-12 lg:px-18 text-white text-2xl content-end flex justify-end ">
        <div className="group flex items-center ">
          <p className="text-white ml-5 text-2xl font-bold ">
            {props.plan.price ?? '--'}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              open ? '' : 'rotate-180 transform'
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
        </div>
      </div>
    </div>
  );

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Panel className=" bg-accent p-[2px] rounded-t-2xl ">
            <div className=" bg-white rounded-t-xl">
              {/* {props.plan.addedValue?.map((addon, i) => {
                const layoutStyle = ' border-b  ';
                return (
                  <div
                    key={i}
                    className={i + 1 === props.plan.addedValue?.length ? '' : layoutStyle}>
                    <PlanCustomiztionLayout
                      addonType={addon}
                      price={`${props.plan.price}`}
                      name={props.plan.name}
                      description={props.plan.description}
                      plantype={props.plan.prePost === 'pre' ? 'PREPAID' : 'POSTPAID'}></PlanCustomiztionLayout>
                  </div>
                );
              })} */}
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
          <Disclosure.Button className="w-full bg-white">
            {selectedPlan(open)}
          </Disclosure.Button>
        </>
      )}
    </Disclosure>
  );
};

const PlanCustomiztionLayout = (props: any) => {
  const navigator = useRouter();
  const navigateToAddons = () => {
    if (props.addonType === 'salam_plan33') {
      navigator.push(AppRoutes.addonSelection);
    }
  };

  return (
    <div className=" py-6 px-12 lg:px-18 flex flex-row ">
      <div className="px-3 content-start ">
        {/* <img
          src={imageByAdonType(props.addonType)}
          alt=""
          width={props?.imgWidth ?? 70}
          height={props?.imgHeight ?? 70}
        /> */}
      </div>
      <div className="w-full flex flex-row justify-between">
        <div>
          <div className="font-medium  text-xs tracking-normal">
            {props.plantype}
          </div>
          <div className="font-bold text- tracking-normal">{props.name}</div>
          <div className=" text-gray-500 font-thin text-sm tracking-normal">
            {props.description}
          </div>
        </div>
        <div className="  text-gray-500 gap-1">
          <div className="flex text-xl gap-1">
            <span>{props.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FiberAddonTypeProps {
  addonType: any;
  price?: string | null;
}

interface SelectedPlanProps {
  plan: FiberPlanDTO;
}

export default SelectedFiberPlanBottomSheet;
