import React, { useContext } from 'react';
import AppContext from '../AppContext';

const DrawerSidePannel = (props: any) => {
  const { setNavbar, navbar } = props;
  const value = useContext(AppContext);
  const { locale } = value.state;

  const lang = '';
  return (
    <div className=" bg-salam-blue">
      {/* <img
        className="absolute  bg-cover bg-center opacity-5"
        src={Images.drawerBackground}
        alt="bg"
      /> */}

      <label
        htmlFor="nav-drawer"
        className={`absolute drawer-button top-4 text-white ${
          locale === 'en' ? 'left-9' : 'right-9'
        }`}
        onClick={() => setNavbar(!navbar)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>

      <div className="h-[5px] divide-y-4 bg-dimWhite opacity-10 " />
      <div className=" h-screen bg-salam-blue text-white overflow-y-scroll  hide-scrollbar z-100 text-xl">
        <div className="px-8 py-16 flex-1">
          <div className=" pt-12 ">
            <div className=" text-accent text-4xl flex">Fiber</div>
            <div className=" pl-8 pt-8  pb-16 font-bold flex flex-col gap-6">
              <div>
                <a
                  href={`https://salam.sa/${lang}/personal/fiber-prepaid`}
                  className="z-200"
                >
                  Prepaid
                </a>
              </div>
              <div>
                <a
                  href={`https://salam.sa/${lang}/personal/fiber-postpaid`}
                  className="z-200"
                >
                  Postpaid
                </a>
              </div>
              <div>
                <a
                  href={`https://salam.sa/${lang}/personal/gaming`}
                  className="z-200"
                >
                  Gamers pack
                </a>
              </div>
              <div>
                <a href={`https://salam.sa/${lang}/personal/orbit-family-pack`}>
                  Orbit Family Pack
                </a>
              </div>
            </div>
            <div className=" text-accent text-4xl flex">5G</div>
            <div className="  pl-8 pt-8  pb-16 font-bold flex flex-col gap-6">
              <div>
                <a href={`https://salam.sa/${lang}/personal/orbit-family-pack`}>
                  Salam 5G
                </a>
              </div>
              <div>
                <a href={`https://salam.sa/${lang}/personal/5g-coverage-check`}>
                  5G Check coverage
                </a>
              </div>
            </div>
            <div className=" h-[1px] divide-y-4 bg-dimWhite opacity-10 " />
          </div>
          <div className=" flex-none text-xl flex flex-col gap-6 font-thin py-8">
            <div className=" font-medium ">Other</div>
            <div>Login to My Account</div>
            <div>
              <a href={`https://salam.sa/${lang}/slm/about`}>About Salam</a>
            </div>
            <div>
              <a href={`https://salam.sa/${lang}/support/complaints`}>
                Complaints
              </a>
            </div>
            <div>
              <a href={`https://salam.sa/${lang}/personal`}>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DrawerSidePannel;
