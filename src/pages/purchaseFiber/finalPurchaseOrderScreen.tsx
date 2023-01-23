/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import { useAppSelector } from '../../hooks/useAppSelector';
// import { userInfo } from '../verification/user/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import Images from '../../components/images';
// import StadiumButton from '../../components/stadiumButton';
// import { NewOrderRouteState } from '../location/slice/types';
import { useTranslation } from 'react-i18next';

const FinalPurchaseOrder = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { state } = useLocation();
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  return (
    <div className="flex flex-col justify-center">
      {/* <div className="flex justify-center ">
        <img src={Images.checkCircle} className="mx-1 my-5" width={120} height={120} alt="check" />
      </div> */}
      <p className="text-center mt-0 md:mt-6 font-bold text-slate-600 md:text-2xl text-lg">
        {t('fiber_on_way')}
      </p>
      <p className="text-center mt-2 md:mt-6 font-bold  text-accent md:text-4xl text-xl">
        {`${t('order_number')}: ${orderId}`}
      </p>
      <p className="text-center font-light text-base md:text-xl mt-6 md:mt-14 text-slate-600 px-5">
        {t('check_email_for_order')}
      </p>
      <p className="text-center text-base md:text-xl  font-light text-slate-600 mt-5 px-5">
        {t('use_order_info')}
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
          {t('back_to_salam')}
        </a>
      </div>
    </div>
  );
};

export default FinalPurchaseOrder;
