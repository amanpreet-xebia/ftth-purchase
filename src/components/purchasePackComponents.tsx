/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface Props {
  plan: any;
}

const PurchasePackComponents = ({ plan }: Props) => {
  return plan.map((p: any, i: number) => {
    return (
      <div
        key={i}
        className="flex  border-width[1px] items-center
        border-gray-400 border-b py-6">
        <img
          className=" m-3 flex flex-col self-start"
          src={p.img}
          width={40}
          height={40}
          alt="plans-img"
        />
        <div
          className="group color-primaryColor  w-60 flex
        flex-col items-start justify-center">
          <p className="text-xs uppercase">{p.type}</p>
          <p className="text-md uppercase">{p.name}</p>
          <div>
            <p className="text-xs text-gray-500 font-extralight">{p.validity}</p>
            <h6 className="text-xs group text-secondaryColor underline my-5">
              {i === 2 ? 'View all add-ons' : 'edit  selection'}{' '}
            </h6>
          </div>
        </div>
        <div className="flex flex-col p-3 w-20 justify-end">
          <h6
            className="text-right flex self-start
          text-md text-gray-500 capitalize font-bold">
            {p.price}
          </h6>
          {i === 0 && (
            <h6
              className="text-right flex self-start text-md
            text-gray-500 capitalize font-bold">
              {'/ monthly'}
            </h6>
          )}
        </div>
      </div>
    );
  });
};

export default PurchasePackComponents;
