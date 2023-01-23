/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DropDown({ label, availableOpt }: any) {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left pt-2 items-center text-[15px] text-white"
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md items-center	">
          <div className="flex flex-row gap-2 px-4 items-center">
            <div>{label}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
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
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {availableOpt &&
              availableOpt?.map((item: any, index: number) => (
                <Menu.Item key={index}>
                  {({ active }: { active: any }) => (
                    <a
                      href={item.value}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
