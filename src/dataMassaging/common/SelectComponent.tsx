/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectComponent = (props: any) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultVal || '');

  const { handleEventChange, availableOption } = props;

  const handleChange = (e: any) => {
    setSelectedValue(e.target?.value);
    handleEventChange(e.target?.value);
  };

  return (
    <Select
      displayEmpty
      labelId="demo-select-small"
      id="demo-select-small"
      value={selectedValue}
      onChange={handleChange}
      className={props.className}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em>{props?.placeholder}</em>;
        }

        const item = availableOption.find(
          ({ value }: { value: any }) => value === selected
        );
        return item.label;
      }}
    >
      <MenuItem disabled value="">
        <em>{props?.placeholder}</em>
      </MenuItem>
      {availableOption &&
        availableOption.map((ele: any, index: any) => (
          <MenuItem value={ele.value} key={index}>
            {ele.label}
          </MenuItem>
        ))}
    </Select>
  );
};

export default SelectComponent;
