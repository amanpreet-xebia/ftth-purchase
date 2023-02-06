/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AppContext from '@/AppContext';

const SelectComponent = (props: any) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultVal || '');
  const { handleEventChange, availableOption } = props;
  const value = useContext(AppContext);
  const { locale } = value.state;

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
        return locale === 'en' ? item?.label : item.labelAr;
      }}
    >
      <MenuItem disabled value="">
        <em>{props?.placeholder}</em>
      </MenuItem>
      {availableOption &&
        availableOption.map((ele: any, index: any) => (
          <MenuItem value={ele.value} key={index}>
            {locale === 'en' ? ele?.label : ele.labelAr}
          </MenuItem>
        ))}
    </Select>
  );
};

export default SelectComponent;
