import React from 'react';
import plat_location from '../../assets/plat_location.png';
import Image from 'next/image';
import Images from '../../components/images';
interface FindPlateNumberProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export default function FindPlateNumber(props: FindPlateNumberProps) {
  return (
    <div>
      <div>
        <label htmlFor="my-modal-5">{props.children}</label>
      </div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className=" modal-box w-11/12 max-w-5xl px-9 pt-6 pb-10 ">
          <div className="flex w-full justify-center ">
            <h3 className=" flex-1 font-bold text-lg md:text-2xl pb-9 md:pb-12 text-primary">
              {props.title}
            </h3>
            <label htmlFor="my-modal-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-none h-10 w-10 fill-primary stroke-primary"
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
          </div>
          <div className="md:px-12 px-0">
            <div className="flex w-full justify-center">
              <Image
                className="object-cover"
                src={Images.plat_location}
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
