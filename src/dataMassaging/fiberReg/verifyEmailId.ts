import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import { FAILURE, RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';
import fiberRegistrationService from '../../services/fiberRegistrationServices/fiberRegistrationService';
import { FiberOrderResponse } from '../fiberPlans/type';

const verifyEmailId = async (
  orderId: string,
  otp: string
): Promise<responseType<FiberOrderResponse>> => {
  return trackPromise(
    fiberRegistrationService
      .verifyEmailId(orderId, otp)
      .then((response : any) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return { status: true, msg: '', data, code: status };
        }
        return {
          status: true,
          code: status || FAILURE,
          msg: `Error Occured: ${status} ${data.message}`,
          data
        };
      })
      .catch((e) => {
        const { response } = e;
        return {
          status: false,
          msg: response?.data?.message || 'Please try after sometime',
          code: response.status || RESPONSE_ERROR
        };
      })
  );
};

export default verifyEmailId;
