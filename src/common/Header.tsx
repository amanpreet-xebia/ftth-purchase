
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';

export default function Header() {
  const value = useContext(AppContext);
  const { locale, user } = value.state;
  const { header } = value.state.languages;
  const lang = '';
  return (<>
        <div className="border-b-[0.1px] border-gray-500 bg-salam-blue flex gap-4 md:gap-8 px-4 py-2 text-white" id="header">
          <button
            type="button"
            className=" text-white flex text-sm rounded-full focus:outline-none "
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true">
            <Link href={`https://salam.sa/${header?.personal}/personal`} target="_blank">
              {header?.personal}
            </Link>
          </button>
          <button
            type="button"
            className=" text-white flex text-sm rounded-full focus:outline-none "
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true">
            <Link href={`https://salam.sa/${header?.business}/business`} target="_blank">
              {header?.business}
            </Link>
          </button>
          <div className="flex-1" />
          <button
            type="button"
            className="hidden  md:visible text-white md:flex text-sm rounded-full focus:outline-none "
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true">
            <Link href={`https://salam.sa/${header?.about}/slm/about`} target="_blank">
              {header?.about}
            </Link>
          </button>
          <button
            type="button"
            className="hidden md:visible text-white md:flex text-sm rounded-full focus:outline-none "
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true">
              <Link href={`https://salam.sa/${header?.complaint}/support/complaints`}>
              {header?.complaint}
            </Link>
          </button>
          <button
              className="flex"
              onClick={() => {
                const selectedLanguage = locale === 'en' ? 'ar' : 'en';
                  value.setLocale(selectedLanguage);
                  if (typeof window !== 'undefined') {
                  localStorage.setItem('selectedLanguage', selectedLanguage);
                  }
            }}
            >
              <span className="text-white font-interBold text-sm mr-[11px]">
                {' '}
                {locale == 'en' ? 'العربيه' : 'English'}
              </span>
            </button>
          {/* <ChangeLanguage></ChangeLanguage> */}
        </div>
  </>);
}
