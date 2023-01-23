import React from 'react';

const PageTracker = (props: { from: Array<string>; to: string }) => {
  return (
    <div id="page-tracker" className="flex mt-24 m-7 text-roman-silver text-xs">
      {props.from.map((item, index) => (
        <div className="flex" key={index}>
          <span>{item}</span>
          <img className="px-2" src="images/right-chevron.svg" />
        </div>
      ))}
      <span className="text-black font-interSemiBold">{props.to}</span>
    </div>
  );
};

export default PageTracker;
