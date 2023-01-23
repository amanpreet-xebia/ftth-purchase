/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthTokenContext } from '../../context/AuthToken';

const ProtectedRoute = ({ user, children }: any) => {
  const { authToken, orderID } = useContext(AuthTokenContext);
  const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  const storedOrderId = typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  if (!(storedToken && storedOrderId)) {
    // if (false) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
