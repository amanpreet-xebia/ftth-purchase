import React from 'react';
// from '../resource/images';

export default function EmptyScreen(props: ErrorScreenPlaceholderProps) {
  return (
    <div className=" flex justify-center">
      <div className="p-8 flex flex-col items-center w-9/12 justify-center text-center">
        {/* <img alt="error_img" src={Images.logo} /> */}
        <h4 className="pt-4 text-2xl capitalizes text-slblue">{props.title}</h4>
        <h6 className=" py-2 text-gray-600">{props.subtitle}</h6>
        {props?.backBtn && (
          <div className="my-3 self-center w-40 mt-14">
            <a
              rel="noopener noreferrer"
              href={props?.btnLink}
              target="_blank"
              className={`hover:scale-[1.02] w-full
    btn rounded-full
    btn-accent
    tracking-wide
    whitespace-nowrap text-white`}>
              {props?.btnLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

interface ErrorScreenPlaceholderProps {
  title: string;
  subtitle: string;
  backBtn?: boolean;
  btnLabel?: string;
  btnLink?: string;
}
