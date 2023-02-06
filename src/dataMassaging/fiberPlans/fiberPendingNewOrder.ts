import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { FAILURE, RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';
import { FiberPendingNewOrderResponse } from './type';

const fiberPendingNewOrder = async (
  orderId: string,
  mockState: string
): Promise<responseType<FiberPendingNewOrderResponse>> => {
  return trackPromise(
    fiberPlansService
      .fiberPendingNewOrder(orderId, mockState)
      .then((response: any) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return {
            status: true,
            msg: '',
            data,
            code: status,
          };
        }
        return {
          status: true,
          code: status || FAILURE,
          msg: data.message || 'Error while getting fiber availablility',
          data,
        };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          msg: response?.data?.message || 'Please try after sometime',
          code: response?.status || RESPONSE_ERROR,
        };
      })
  );
};

export default fiberPendingNewOrder;
