import { FiberPlanDTO } from '../../interface/types';
import {
  FiberOrderResponse,
  FiberPendingNewOrderResponse,
  FiberServicableResponse,
} from '../../dataMassaging/fiberPlans/type';
import axios from '../axios';
import { stringify } from 'querystring';
const getFiberPlans = () => {
  return axios.get<FiberPlanDTO[]>('/plans');
};

const fiberPlanServicable = (
  provider: string,
  planId: string,
  platId: string
) => {
  return axios.get<FiberServicableResponse>(
    `/plates/${platId}?provider=${provider}&planId=${planId}`
  );
};

const fiberNewOrder = (
  period: string,
  provider: string,
  planId: string,
  odb: string,
  workflow: string,
  orderId: string
) => {
  return axios.post<FiberOrderResponse>(`/newOrder/${orderId}/selectOdb`, {
    period: period,
    odb: odb,
    provider: provider,
    planId: planId,
    workflow_version: workflow,
  });
};

const fiberPendingNewOrder = (orderId: string, mockState: string) => {
  return axios.get<FiberPendingNewOrderResponse>(`/newOrder/${orderId}`, {
    headers: {
      prefer: `${mockState}`,
    },
  });
};

const payFiberPlan = (params: any, payload: any) => {
  return axios.post(`/newOrder/${params}/pay`, payload);
};

const bookAppointment = (params: any, payload: any) => {
  return axios.post(`/newOrder/${params}/schedule`, payload);
};

const getTimeSlot = (params: any) => {
  return axios.get(`/newOrder/${params}`, {
    headers: {
      prefer: '200_state_installation_schedule',
    },
  });
};

const fiberPlansService = {
  getFiberPlans,
  fiberPlanServicable,
  fiberNewOrder,
  fiberPendingNewOrder,
  payFiberPlan,
  bookAppointment,
  getTimeSlot,
};
export default fiberPlansService;
