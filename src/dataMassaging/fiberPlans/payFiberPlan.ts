import { trackPromise } from 'react-promise-tracker';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { responseType } from '../../interface/responseType.interface';
import { FiberRegistrationType } from '../../interface/fiberRegistration/fiberRegistration.interface';
import { RESPONSE_ERROR } from '../../services/apisConstants';

const payFiberPlan = async (paymentDetails: any, orderId: any): Promise<responseType<any>> => {
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
          code: response.status || RESPONSE_ERROR,
          msg: response?.data?.message || 'Please try after sometime',
          errors: response?.data?.errors || {}
        };
      })
  );
};

export default payFiberPlan;
