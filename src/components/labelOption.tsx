import React from 'react';

interface LabelOptionProps {
  label: string;
  size?: number | 16;
}

export default function LabelOption(props: LabelOptionProps) {
  return (
    <div className="flex flex-row gap-2 px-4 items-center">
      <div className={` text-[${props.size}px]`}>{props.label}</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
