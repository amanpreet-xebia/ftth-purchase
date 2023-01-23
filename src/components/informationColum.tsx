import React from 'react';

const InformationColum = (info: InformationColumProps) => {
  return (
    <div>
      <div className=" font-bold">{info.title}</div>
      <div className=" font-light">{info.body}</div>
    </div>
  );
};

type InformationColumProps = {
  title: string;
  body: string;
};

export default InformationColum;
