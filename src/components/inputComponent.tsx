/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import InputField from './inputField';

interface IProps {
  placeholder: string;
  fontsize?: string;
  label: any;
  maxlength?: number;
  inputType?: string;
  value?: any;
  onChange?: any;
  required?: boolean;
}

const InputComponent = ({ placeholder, label }: IProps) => {
  return (
    <div className="my-2">
      <label
        htmlFor="price"
        className="block text-sm md:text-lg font-medium text-white-700 truncate text-start">
        {`${label}*`}
      </label>
      <div className="my-2 relative rounded-sm shadow-sm  ">
        {/* <input
					type={inputType ? inputType : 'text'}
					value={value}
					pattern={inputType === 'number' || inputType === 'tel' ? "[0-9]{3}-[0-9]{2}-[0-9]{3}" : ''}
					onChange={onChange}
					name="price"
					id="price"
					maxLength={maxlength}
					className={` bg-primary block w-full pl-3 pr-10 py-3.5 sm:${fontsize ? fontsize : 'text-sm'} border border-white-400 rounded-md`}
					placeholder={placeholder}
					required={required}
				/>
				 */}

        <InputField placeholder={placeholder}></InputField>
      </div>
    </div>
  );
};

export default InputComponent;
