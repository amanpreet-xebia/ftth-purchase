import React from 'react';
// import Images from '../resource/images';

const Logo = (props: SalamLogoProps) => {
  if (props.hidden) {
    
    return null;
  }
  return (
    <div>
      {/* <img
        className="absolute top-12 mt-3 z-50 drop-shadow-xl ltr:right-4 rtl:left-0 md:rtl:right-4 md:ltr:left-0"
        src={Images.logo}
        alt="logo"
        width={128}
      /> */}
    </div>
  );
};
export default Logo;

type SalamLogoProps = {
  hidden: boolean | false;
};
