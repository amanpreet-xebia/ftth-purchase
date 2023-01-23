import React from 'react';

type Props = {
  phone: string;
  type: string;
  price: string;
};

const NumberType = ({ phone, type, price }: Props) => {
  return (
    <>
      <div className="group flex justify-between bg-white px-5 py-5">
        <div className="group flex justify-around">
          <h6>{phone}</h6>
          <button
            className={`${
              type === 'Gold'
                ? 'bg-salamyellow'
                : type === 'Silver'
                ? 'bg-salamsilver'
                : 'bg-salamgray'
            } self-end  text-xs py-1 text-white font-normal rounded-full w-20 ml-2`}>
            {type}
          </button>
        </div>
        <div className="group flex justify-around">
          <h6 className="text-primary font-sm">{price}</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-5 ml-2 stroke-secondaryColor"
            fill="none"
            viewBox="0 0 24 24"
            color="#00B140"
            stroke="currentColor"
            strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default NumberType;
