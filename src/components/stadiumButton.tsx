import { DefaultTFuncReturn } from 'i18next';
import React from 'react';

function StadiumButton(props: StadiumButtonProp) {
  let buttonStyle = '';

  if (props.pressed) {
    buttonStyle = ' bg-btndisabled  text-white font-bold  ';
  } else {
    if (props.outlined) {
      buttonStyle = 'border-accent text-accent font-bold  ';
    } else {
      buttonStyle =
        'rounded-full bg-accent  text-white font-bold border-accent';
    }
    if (props.disabled) {
      buttonStyle =
        ' bg-btndisabled  text-white font-bold border-accent  border-btndisabled';
    }
  }

  return (
    <button
      onClick={props.onClick}
      className={`${buttonStyle} hover:scale-[1.02] w-full
    btn rounded-full
    btn-accent
    tracking-wide
    whitespace-nowrap p-3 text-sm font-bold uppercase ${props.loading} ${props.newClass}`}
    >
      {props.text}
      {props.disabled}
    </button>
  );
}
export default StadiumButton;

type StadiumButtonProp = {
  text: string | undefined | DefaultTFuncReturn;
  disabled?: boolean | false;
  outlined?: boolean | true;
  pressed?: boolean | false;
  loading?: boolean | false;
  newClass?: string | undefined;
  onClick?: () => void;
};
