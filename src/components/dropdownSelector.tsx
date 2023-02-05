import React, { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function DropDownSelector({
  hint,
  items,
  onItemSelected,
}: DropDownSelectorProps) {
  const [selectedItem, setSelectedItem] = useState<DropDownItem>();

  const onDropDownItemSelected = (item: DropDownItem) => {
    setSelectedItem(item);
    onItemSelected(item);
  };

  return (
    <div className="dropdown w-full ">
      <label tabIndex={2} className="  ">
        <div className=" w-full flex flex-row justify-between rounded-md px-3 py-3 bg-white text-primary">
          {selectedItem == null ? (
            <div> {(selectedItem || hint) ?? 'Select your option'}</div>
          ) : (
            <div> {selectedItem.value}</div>
          )}

          <HiOutlineChevronDown
            className=" flex-none  ml-2 h-5 w-5 "
            aria-hidden="true"
          />
        </div>
      </label>
      <ul
        tabIndex={2}
        className=" w-full dropdown-content menu p-2  mb-4 shadow bg-base-100 rounded-md mt-2 text-black"
      >
        {items?.map((item) => (
          <li key={item.key}>
            <button
              className={`${selectedItem?.key === item.key ? 'bg-accent' : ''}`}
              onClick={() => onDropDownItemSelected(item)}
            >
              {item.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface DropDownSelectorProps {
  onItemSelected(item: DropDownItem): void;
  items?: DropDownItem[] | null | undefined;
  hint?: string | null | undefined;
}

export type DropDownItem = {
  key: string;
  value: string;
  label: string;
  labelAr?: string;
};
