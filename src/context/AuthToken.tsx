/* eslint-disable react/react-in-jsx-scope */
'use client';

import { useContext, createContext, useState } from 'react';

export const AuthTokenContext = createContext({} as any);

const AuthTokenProvider = ({ children }: { children: any }) => {
  const [authToken, setAuthToken] = useState('');
  const [orderID, setOrderID] = useState('');
  const [orderDetails, setOrderDetails] = useState([]);

  return (
    <AuthTokenContext.Provider
      value={{ setAuthToken, setOrderID, authToken, orderID, setOrderDetails, orderDetails }}
    >
      {children}
    </AuthTokenContext.Provider>
  );
};

export default AuthTokenProvider;
