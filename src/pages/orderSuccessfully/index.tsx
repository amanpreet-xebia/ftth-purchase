'use client';

import React, { useContext, useEffect } from 'react';

import AppContext from '../../AppContext';
import AppRoutes from '../../constants/appRoutes';
import { getFiberRoutKey } from '../../constants/routeNavigationAccountState';
import backRestrict from '../utilities/backRestrict';

const orderSuccessfully = () => {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const {
    page: { OrderSuccessfully },
  } = value.state.languages;
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  useEffect(() => {
    backRestrict();
    // if (
    //   localStorage.getItem('state') !==
    //   getFiberRoutKey(AppRoutes.orderSuccessfully)
    // )
    //   window.history.forward();
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center ">
        {/* <img src={Images.checkCircle} className="mx-1 my-5" width={120} height={120} alt="check" /> */}
      </div>
      <p className="text-center mt-0 md:mt-6 font-bold text-slate-600 md:text-2xl text-lg">
        {OrderSuccessfully?.fiberOnWay}
      </p>
      <p className="text-center mt-2 md:mt-6 font-bold  text-accent md:text-4xl text-xl">
        {`${OrderSuccessfully?.orderNumber}: ${orderId}`}
      </p>
      <p className="text-center font-light text-base md:text-xl mt-6 md:mt-14 text-slate-600 px-5">
        {OrderSuccessfully?.checkEmailForOrder}
      </p>
      <p className="text-center text-base md:text-xl  font-light text-slate-600 mt-5 px-5">
        {OrderSuccessfully?.useOrderInfo}
      </p>
      <div className="my-3 self-center w-40 mt-14">
        <a
          rel="noopener noreferrer"
          href="https://test.salam.sa/en"
          target="_blank"
          className={`hover:scale-[1.02] w-full
    btn rounded-full
    btn-accent
    tracking-wide
    whitespace-nowrap text-white`}
        >
          {' '}
          {OrderSuccessfully?.backToSalam}
        </a>
      </div>
    </div>
  );
};

export default orderSuccessfully;
