import { trackPromise } from 'react-promise-tracker';
import fiberRegistrationService from '../../services/fiberRegistrationServices/fiberRegistrationService';
import { responseType } from '../../interface/responseType.interface';
import { FiberRegistrationType } from '../../interface/fiberRegistration/fiberRegistration.interface';
import { RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';

const createAccount = async (userRecord: any): Promise<responseType<FiberRegistrationType>> => {
  const { orderId, userDetails } = userRecord;
  return trackPromise(
    fiberRegistrationService
      .createAccount(orderId, userDetails)
      .then((response: { status: any; data: any; }) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return { status: true, code: status, msg: '', data };
        }
        return {
          status: false,
          code: status,
          msg: data.messages || 'Failed to book appointment',
          data
        };
      })
      .catch((e: { response: any; }) => {
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

export default createAccount;
