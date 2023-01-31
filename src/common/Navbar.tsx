/* eslint-disable no-unsafe-optional-chaining */
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import Logo from '../assets/images/logo.svg';
import AppContext from '../AppContext';
import Header from './Header';
import DrawerSidePannel from './DrawerSidePannel';
import DropDown from '../common/DropDown';
import { UserProfile } from '../components/UserProfile';
import SelectedFiberDropdown from '../common/SelectedFiberDropdown';
import { AuthTokenContext } from '../context/AuthToken';
import fiberPendingNewOrder from '../dataMassaging/fiberPlans/fiberPendingNewOrder';
import { AlertContext } from '../context/alertContext/AlertContext';

function Navbar() {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const {
    navOption: { salamOpt = {}, _5gOpt, _5gOptHeading, salamOptHeading },
  }: any = value?.state?.languages;
  const [navbar, setNavbar] = useState(false);
  const lang = '';

  const { setOrderDetails } = useContext(AuthTokenContext);
  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);
  const orderID = localStorage.getItem('orderId');
  useEffect(() => {
    if (orderID) {
      (async () => {
        const orderId =
          typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';

        if (orderId) {
          const { status, data = {} } = await fiberPendingNewOrder(
            `${orderId}`,
            '200_state_mobile_verification'
          );
          if (status) {
            setOrderDetails(data?.selectedPlan);
            localStorage.setItem('mobileNumber', data?.mobile || '');
          } else {
            setOpen(true);
            setAlertMsg('Error while fetching your order');
          }
        }
      })();
    }
  }, [orderID]);

  const availableOpt1 = [
    {
      label: salamOpt?.fiber_postpaid,
      value: `https://salam.sa/${lang}/personal/fiber-postpaid`,
    },
    {
      label: salamOpt?.fiber_prepaid,
      value: `https://salam.sa/${lang}/personal/fiber-prepaid`,
    },
    {
      label: salamOpt?.gamers_pack,
      value: `https://salam.sa/${lang}/personal/gaming`,
    },
    {
      label: salamOpt?.orbit_family_pack,
      value: `https://salam.sa/${lang}/personal/orbit-family-pack`,
    },
  ];
  const availableOpt2 = [
    {
      label: _5gOpt?.salam_5g_fwa,
      value: `https://salam.sa/${lang}/personal/orbit-family-pack`,
    },
    {
      label: _5gOpt?.g_coverage_check,
      value: `https://salam.sa/${lang}/personal/5g-coverage-check`,
    },
  ];
  return (
    <div>
      <Header />
      <nav
        className="relative
    h-[60px]
    md:h-[100px]
    w-full
    flex flex-wrap
    items-center
    justify-between
    md:py-4
    bg-salam-blue
    shadow-lg
    navbar"
        id="navBar"
      >
        <div className="flex flex-wrap justify-between items-center md:px-44 w-full px-5">
          <Link
            href="/"
            className={`absolute top-[7px] md:top-[10px] z-50  ${
              locale === 'en' ? 'md:left-12 right-0' : 'md:right-12 left-0'
            } z-10`}
          >
            <Logo />
          </Link>
          <div
            className={`absolute gap-20 w-screen  min-h-[1200px] top-0 left-0 bg-salam-blue md:hidden  items-center mx-auto z-10 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <DrawerSidePannel setNavbar={setNavbar} navbar={navbar} />
          </div>
          {/* <div
          className={`hidden absolute gap-20 md:relative w-screen md:w-[720px] lg:w-[1086px] h-screen md:h-[30px] top-0 left-0 bg-salam-blue md:flex md:justify-between items-center mx-auto z-10 justify-between ml-0`}
        > */}
          <div
            className={`hidden absolute gap-20 md:relative w-screen  h-screen md:h-[30px] top-0 left-0 bg-salam-blue md:flex md:justify-between items-center mx-auto z-10 justify-between ml-0`}
          >
            <ul className="flex md:flex-wrap w-full text-center md:text-left flex-col md:flex-row p-4 mt-4 md:mt-0 text-xl">
              <li>
                <DropDown
                  label={salamOptHeading}
                  availableOpt={availableOpt1}
                />
              </li>
              <li>
                <DropDown label={_5gOptHeading} availableOpt={availableOpt2} />
              </li>
            </ul>
            <div
              className={`mt-3 absolute ${
                locale == 'en' ? 'right-0' : 'left-0'
              }`}
            >
              <UserProfile />
            </div>
          </div>
          <div
            className={`md:hidden h-8 absolute ${
              locale == 'en' ? 'left-5' : 'right-5'
            }  z-10`}
          >
            <button
              type="button"
              className={`${navbar ? 'hidden' : 'block'}`}
              onClick={() => setNavbar(!navbar)}
            >
              <img src="/images/menu-open.svg" alt="" />
            </button>
          </div>
        </div>
      </nav>
      <SelectedFiberDropdown />
    </div>
  );
}

export default Navbar;
