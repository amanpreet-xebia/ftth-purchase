export interface AlertContextType {
  setOpen: (showAlert: boolean) => void;
  setAlertMsg: (msg: string) => void;
  setAlertPosition: (position: any) => void;
  setSeverity: (position: any) => void;
  setAutoHideDuration: (duration: number) => void;
}

export interface SnackbarPositionType {
  vertical: string | undefined;
  horizontal: string | undefined;
}
