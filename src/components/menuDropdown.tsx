/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

type Props = {
  currentHeadFun: (v: string) => void;
  options: Array<string>;
};

const MenuDropdown: React.FC<Props> = ({ options, currentHeadFun }) => {
  const [currentHead, setCurrentHead] = useState('All');

  const getCurrentState = (e: any) => {
    setCurrentHead(e.target.value);
    currentHeadFun(e.target.value);
  };
  return (
    <Menu as={'div'} className="group ">
      <Menu.Button>
        <div className="group flex justify-around bg-white border border-salamgreen text-secondaryColor rounded-full w-40 py-2">
          <h5 className={'font-normal text-salamgreen'}>{currentHead}</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color="#00B140"
            strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {options.map((option, index) => (
              <Menu.Item key={index + option.toString()}>
                {({ active }) => (
                  <button
                    value={option}
                    onClick={getCurrentState}
                    className={` group  hover:bg-salamgreen md:${
                      active && 'bg-salamgreen'
                    } text-primary flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
