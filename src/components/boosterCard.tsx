/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import StadiumButton from './stadiumButton';
// import { useNavigate } from 'react-router-dom';

function BoosterCard(props: BoosterCardProp) {
  // const nav = useNavigate();
  // const onHandleClick = () => {
  //   nav('/pick-number');
  // };
  return (
    <div className="mt-4 ">
      <div className="flex h-100 w-full p-2 bg-slblue rounded-2xl self-stretch">
        <div className="w-full">
          <div className=" flex-grow">
            <div className=" bg-btndisabled  rounded-t-2xl pt-16 grow"></div>
            <div className="pt-3 pl-3 pr-3">
              <div className="pt-2 font-bold text-white">{props.title}</div>
              <div className=" font-light text-white">{props.body}</div>
            </div>
          </div>
          <div className="flex justify-end items-end py-2">
            <div>
              <StadiumButton
                text={props.buttonText}
                // onClick={onHandleClick}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoosterCard;

type BoosterCardProp = {
  title: string;
  body: string;
  buttonText: string;
};
