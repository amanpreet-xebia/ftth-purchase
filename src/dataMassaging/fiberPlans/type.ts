// import { FiberPlanDTO } from '../../containers/plans/slice/types';
import { FiberPlanDTO } from '../../interface/types';

export interface FiberServicableResponse {
  odb?: string;
  provider?: string;
  message?: string;
}

export interface FiberOrderResponse {
  state?: string;
  token?: string;
  message?: string;
  error?: string;
  orderId?: number;
  ref?: number;
}

export interface FiberPendingNewOrderResponse {
  selectedPlan?: FiberPlanDTO;
  state?: string;
  odb?: string;
  day?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  message?: string;
  price?: string;
}
