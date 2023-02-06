import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import { FAILURE, RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';
import { FiberOrderResponse } from '../fiberPlans/type';
import fiberRegistrationService from '../../services/fiberRegistrationServices/fiberRegistrationService';

const verifyMobileNumber = async (
  orderId: string,
  otp: string
): Promise<responseType<FiberOrderResponse>> => {
  return trackPromise(
    fiberRegistrationService
      .verifyMobileNumber(orderId, otp)
      .then((response: any) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return { status: true, msg: '', data, code: status };
        }
        return {
          status: true,
          code: status || FAILURE,
          msg: `Error Occured: ${status} ${data.message}`,
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

export default verifyMobileNumber;
