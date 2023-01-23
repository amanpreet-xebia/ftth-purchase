import React, { createContext, useState } from 'react';
import { AlertContextType } from '../../interface/context/alertContext.interface';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export const AlertContext = createContext({} as any);
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertProvider = ({ children }: { children: any }) => {
  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [severity, setSeverity] = useState<any>('success');
  const [autoHideDuration, setAutoHideDuration] = useState(6000);

  const [alertPosition, setAlertPosition] = useState<any>({
    vertical: 'top',
    horizontal: 'center'
  });

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <AlertContext.Provider
      value={{ setOpen, setAlertMsg, setAlertPosition, setSeverity, setAutoHideDuration }}>
      {open && alertMsg && (
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar
            open={open}
            onClose={handleClose}
            autoHideDuration={autoHideDuration}
            anchorOrigin={{ ...alertPosition }}>
            <Alert onClose={handleClose} severity={severity || 'success'} sx={{ width: '100%' }}>
              {alertMsg}
            </Alert>
          </Snackbar>
        </Stack>
      )}

      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
