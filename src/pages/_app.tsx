'use client';
// import '@/styles/globals.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { translations } from '../constants';
// import Sidebar from './components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import AuthTokenProvider from '../context/alertContext/AlertContext';
import AuthToken from '../context/AuthToken';

import Spinner from '../components/common/spinner/spinner';
import Head from 'next/head';
import Images from '../components/images';
export default function App({ Component, pageProps }: AppProps) {
  const storedLang: string =
    typeof window !== 'undefined'
      ? localStorage.getItem('selectedLanguage') || 'en'
      : 'en';
  const [locale, setLocale] = useState(storedLang);
  const [user, setUser] = useState({});
  const translation: any = translations;

  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  // const userData: string = sessionStorage.getItem('UserData') || '';
  // setUser(userData);
  // useEffect(() => {
  //   if (Object.keys(userData).length !== 0){
  //   debugger
  //   // console.log(contextData.state.user);
  //   setUser(userData);
  //   }
  // }, [userData])

  // if (Object.keys(user).length === 0){
  //   router.push('/login')
  // }
  return (
    <>
      <AuthTokenProvider>
        <AuthToken>
          <AppContext.Provider
            value={{
              state: {
                languages: translation[locale],
                locale: locale,
                // user: JSON.parse(userData) || {},
              },
              setLocale: setLocale,
              setUser: setUser,
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
                  {/* <Alert/> */}
                  {/* <ToastContainer /> */}
                  <Component {...pageProps} />
                </main>

                {/* <button onClick={showToastMessage}>Notify</button> */}
              </div>

              <Footer />
            </div>
          </AppContext.Provider>
        </AuthToken>
      </AuthTokenProvider>
    </>
  );
}
