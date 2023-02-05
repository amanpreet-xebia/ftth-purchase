import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { FAILURE, RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';
import { FiberOrderResponse } from './type';
import { useContext } from 'react';
import AppContext from '@/AppContext';

const fiberNewOrder = async (
  period: string,
  provider: string,
  planId: string,
  odb: string,
  workflow: string,
  orderId: string
): Promise<responseType<FiberOrderResponse>> => {
  const value = useContext(AppContext);

  const {
    page: { errorMessages },
  } = value.state.languages;
  return trackPromise(
    fiberPlansService
      .fiberNewOrder(period, provider, planId, odb, workflow, orderId)
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
          msg: data.message || errorMessages.failedTocreateOrder,
          data,
        };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          msg: response?.data?.message || errorMessages.tryAfterSometime,
          code: response.status || RESPONSE_ERROR,
        };
      })
  );
};

export default fiberNewOrder;
