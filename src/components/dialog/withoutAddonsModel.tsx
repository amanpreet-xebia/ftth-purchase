import React from 'react';
import { useNavigate } from 'react-router-dom';
import StadiumButton from '../../components/stadiumButton';

function WithoutAdonsModel(props: CandidateResultModelProp) {
  const nav = useNavigate();
  const onHandleClick = () => {
    nav('/pay');
  };
  const navToExtraAdons = () => {
    nav('/pick-number');
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-2">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6">
                {/*body*/}
                <div className="p-10 text-center font-bold">{props.dialogText}</div>
                <div className=" flex flex-col gap-3 mx-10 pb-6">
                  <StadiumButton text={props.btnText1} onClick={onHandleClick}></StadiumButton>
                  <StadiumButton
                    text={props.btnText2}
                    outlined={true}
                    onClick={navToExtraAdons}></StadiumButton>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
type CandidateResultModelProp = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  dialogText: string;
  btnText1?: string;
  btnText2?: string;
};

export default WithoutAdonsModel;
