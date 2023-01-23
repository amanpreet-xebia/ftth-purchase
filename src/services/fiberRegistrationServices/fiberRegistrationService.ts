import { FiberOrderResponse } from '../../dataMassaging/fiberPlans/type';
import axios from '../axios';
const createAccount = (params: any, payload: any) => {
  // return axios.post(`/newOrder/${params}/createAccount`, payload);
  return axios.post(`newOrder/initiate`, payload);
};

const verifyMobileNumber = (oderId: string, otp: string) => {
  return axios.post<FiberOrderResponse>(`/newOrder/${oderId}/verifyMobile`, {
    otp: otp,
  });
};

const resendMobileOtp = (oderId: string, otp: string) => {
  return axios.post<FiberOrderResponse>(`/newOrder/${oderId}/resendMobileOtp`, {
    otp: otp,
  });
};

const resendEmailOtp = (oderId: string, otp: string) => {
  return axios.post<FiberOrderResponse>(`/newOrder/${oderId}/resendEmailOtp`, {
    otp: otp,
  });
};

const verifyEmailId = (oderId: string, otp: string) => {
  return axios.post<FiberOrderResponse>(`/newOrder/${oderId}/verifyEmail`, {
    otp: otp,
  });
};

const updateAccount = (oderId: string, password: string) => {
  return axios.post<FiberOrderResponse>(`/newOrder/${oderId}/updateAccount`, {
    password: password,
  });
};

const fiberRegistrationService = {
  createAccount,
  verifyMobileNumber,
  verifyEmailId,
  updateAccount,
  resendMobileOtp,
  resendEmailOtp,
};
export default fiberRegistrationService;
