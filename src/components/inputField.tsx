import React, { useState } from 'react';

export default function InputField(props: any) {
  const { handleInputChange, ...rest } = props;
  const [inputVal, setInputVal] = useState('');

  const handleChangeEvent = (event: any) => {
    setInputVal(event.target?.value || '');
    handleInputChange(event.target?.value || '');
  };
  return (
    <div>
      <input
        type="text"
        id="first_name"
        className={`dyn-success-input-field`}
        placeholder="type here"
        onChange={(e :any ) => handleChangeEvent(e)}
        value={inputVal}
        {...rest}
      />
    </div>
  );
}
