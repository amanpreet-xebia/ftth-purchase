import React from 'react';
import { getFiberRoutKey } from '../../constants/routeNavigationAccountState';

const backRestrict = (state: string) => {
  if (localStorage.getItem('state') !== getFiberRoutKey(state))
    window.history.forward();
  return;
};

export default backRestrict;
