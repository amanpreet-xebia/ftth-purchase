import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';

import StadiumButton from './stadiumButton';

type Props = {
  index: number;
  plan: string;
  price: string;
  description: string;
  btnText: string;
};

const AddonsContent = ({ plan, price, description, index, btnText }: Props) => {
  const [addOn, setAddOn] = useState<number[]>([]);

  const setAddonFun = () => {
    const idx = addOn.findIndex((i) => i === index);

    if (idx > -1) {
      addOn.splice(idx, 1);
      setAddOn([...addOn]);
    } else {
      addOn.push(index);
      setAddOn([...addOn, index]);
    }
  };
  return (
    <>
      <div className="  px-5 my-5">
        <div className="border border-primary rounded-2xl">
          <div className="group flex rounded-t-md justify-between bg-primary text-white items-center py-5 px-5 h-15 ">
            <h6>{plan}</h6>
            <h4>{price}</h4>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <div className="group flex justify-between items-center p-3 ">
                  <div className="group  w-80 ">
                    <Disclosure.Button>
                      <div className="flex flex-row">
                        <p className="text-sm text-primary font-semibold">
                          see_more_details
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 ml-2 ${open ? 'rotate-180 transform' : ''}`}
                          fill="none"
                          height={10}
                          width={10}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                      </div>
                    </Disclosure.Button>
                  </div>
                  <div className="w-60  ">
                    <StadiumButton
                      text={btnText}
                      onClick={setAddonFun}
                      disabled={addOn.includes(index) ? true : false}
                      outlined={addOn.includes(index) ? true : false}
                    />
                  </div>
                </div>

                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-primary font-light">
                  {description}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default AddonsContent;
