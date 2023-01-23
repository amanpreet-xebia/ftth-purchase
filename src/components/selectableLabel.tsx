import React from 'react';

interface InputFieldProps {
  value: string;
  onClickEvent?: any;
}

export default function SelectableLabel(props: any) {
  const { selectedTimeSlot, setSelectedTimeSlot, currentDate, value, dateWithTime, onClickEvent } =
    props;

  const isSelected = selectedTimeSlot === dateWithTime;

  return (
    <div key={dateWithTime} className={dateWithTime}>
      <div
        onClick={() => {
          setSelectedTimeSlot(currentDate + '_' + value);
          onClickEvent(currentDate + '_' + value);
        }}
        className={`bg-gray-50 border border-gray-300
            text-black text-lg rounded-lg focus:ring-accent
            focus:border-accent block w-full p-4
            dark:text-white dark:focus:ring-accent
            focus:outline-accent font-light
            text-center hover:bg-accent hover:text-white
            dark:focus:border-accent py-[17px] md:py-[15px] ${isSelected ? 'highlightTime' : ''}`}>
        {props.value}
      </div>
    </div>
  );
}
