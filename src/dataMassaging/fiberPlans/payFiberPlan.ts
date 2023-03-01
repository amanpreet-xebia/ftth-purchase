import { trackPromise } from 'react-promise-tracker';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { responseType } from '../../interface/responseType.interface';
import { RESPONSE_ERROR } from '../../services/apisConstants';
import { errorsAr, errorsEn } from '@/constants/errorConstants';
import errorTranslations from '@/pages/utilities/errorTranslations';

const payFiberPlan = async (
  paymentDetails: any,
  orderId: any
): Promise<responseType<any>> => {
  return trackPromise(
    fiberPlansService
      .payFiberPlan(orderId, paymentDetails)
      .then((response: any) => {
        const { status, message, data } = response;
        if (message) {
          return { status: false, msg: message, data: {} };
        }
        return { status: true, msg: '', data };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          code: response?.status || RESPONSE_ERROR,
          msg:
            response?.data?.message ||
            errorTranslations(
              errorsEn.tryAfterSometime,
              errorsAr.tryAfterSometime
            ),
          errors: response?.data?.errors || {},
        };
      })
  );
};

export default payFiberPlan;
