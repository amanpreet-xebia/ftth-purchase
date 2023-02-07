import { errorsAr, errorsEn } from '@/constants/errorConstants';
import { errorTranslations } from '@/pages/utilities/errorTranslations';
import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import { FAILURE, RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';
import fiberRegistrationService from '../../services/fiberRegistrationServices/fiberRegistrationService';
import { FiberOrderResponse } from '../fiberPlans/type';

const updateAccountApi = async (
  orderId: string,
  password: string
): Promise<responseType<FiberOrderResponse>> => {
  return trackPromise(
    fiberRegistrationService
      .updateAccount(orderId, password)
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

export default updateAccountApi;
