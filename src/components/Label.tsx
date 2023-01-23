import React from 'react';

interface LabelProps {
  children?: JSX.Element[] | JSX.Element;
  label?: string;
  style?: LabelStyle | LabelStyle.label;
  className?: string;
}
export enum LabelStyle {
  labelLarge,
  label,
  heading,
  hint,
  link
}

export default function Label(props: LabelProps) {
  //  label style

  let labelStyle = ' dyn-label-large ';
  switch (props.style) {
    case LabelStyle.labelLarge:
      labelStyle = ' dyn-label-large ';
      break;
    case LabelStyle.label:
    default:
      labelStyle = ' dyn-label ';
  }

  return (
    <div className={` py-2 ${labelStyle} ${props.className}`}> {props.children ?? props.label}</div>
  );
}
