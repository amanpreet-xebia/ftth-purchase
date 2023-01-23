import React from 'react';
// import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';

interface props {
  text: string;
  color?: string;
  isWarning?: boolean | false;
}
const NoticeCard = ({ text, color, isWarning }: props) => {
  const noticeBackground = color != null ? `bg-[${color}]` : 'bg-accent';

  return (
    <div>
      <div
        className={`${noticeBackground} w-full text-center py-2  px-4 rounded-full text-base md:text-xl dyn-card`}>
        <div className="py-2 px-2 flex md:relative">
          <div>
            {!isWarning ? (
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M14.625 19.1074L21.2461 12.4863L22.125 13.3652L14.625 20.8652L11.1387 17.3789L12.0176 16.5L14.625 19.1074Z"
                  fill="#00B140"
                />
              </svg>
            ) : (
              <div>
                {/* <AiFillCloseCircle size={32}></AiFillCloseCircle> */}
              </div>
            )}
          </div>
          <div
            className="p-2 items-center  text-indigo-100 leading-none  md:w-full md:absolute lg:rounded-full  lg:inline-flex flex-shrink"
            role="alert">
            <span className="font-semibold mr-2 text-center flex-auto px-4">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoticeCard;
