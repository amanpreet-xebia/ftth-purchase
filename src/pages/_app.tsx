'use client';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import React, { useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { translations } from '../constants';
import AuthTokenProvider from '../context/alertContext/AlertContext';
import AuthToken from '../context/AuthToken';

import Spinner from '../components/common/spinner/spinner';
export default function App({ Component, pageProps }: AppProps) {
  const storedLang: string =
    typeof window !== 'undefined'
      ? localStorage.getItem('selectedLanguage') || 'en'
      : 'en';
  const [locale, setLocale] = useState(storedLang);
  const translation: any = translations;

  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  return (
    <>
      <AuthTokenProvider>
        <AuthToken>
          <AppContext.Provider
            value={{
              state: {
                languages: translation[locale],
                locale: locale,
              },
              setLocale: setLocale,
            }}
          >
            <div
              className="flex flex-col min-h-screen justify-between font-inter relative"
              dir={locale === 'en' ? 'ltr' : 'rtl'}
            >
              <Spinner />
              <Navbar></Navbar>
              <div className="my-20 md:my-0 md:h-[calc(100vh-284px)] lg:min-h-[800px] md:h-full pb-4">
                <main>
                  <Component {...pageProps} />
                </main>
              </div>

              <Footer />
            </div>
          </AppContext.Provider>
        </AuthToken>
      </AuthTokenProvider>
    </>
  );
}
