import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerComp = (props: any) => {
  const { onEventChange } = props;
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
          onEventChange(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComp;
