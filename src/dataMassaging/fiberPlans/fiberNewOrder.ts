import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { FAILURE, RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';
import { FiberOrderResponse } from './type';

import { errorTranslations } from '@/pages/utilities/errorTranslations';
import { errorsAr, errorsEn } from '@/constants/errorConstants';

const fiberNewOrder = async (
  period: string,
  provider: string,
  planId: string,
  odb: string,
  workflow: string,
  orderId: string
): Promise<responseType<FiberOrderResponse>> => {
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
          msg:
            data.message ||
            errorTranslations(
              errorsEn.failedTocreateOrder,
              errorsAr.failedTocreateOrder
            ),

          data,
        };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          msg:
            response?.data?.message ||
            errorTranslations(
              errorsEn.tryAfterSometime,
              errorsAr.tryAfterSometime
            ),
          code: response?.status || RESPONSE_ERROR,
        };
      })
  );
};

export default fiberNewOrder;
