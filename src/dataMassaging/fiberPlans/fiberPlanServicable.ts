import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { FAILURE, RESPONSE_ERROR, SUCCESS } from '../../services/apisConstants';
import { FiberServicableResponse } from './type';

const fiberPlanServicable = async (
  provider: string,
  planId: string,
  plateId: string
): Promise<responseType<FiberServicableResponse>> => {
  return trackPromise(
    fiberPlansService
      .fiberPlanServicable(provider, planId, plateId)
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
          msg: `Error Occured: ${status} ${data.message}`,
          data,
        };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          msg: response?.data?.message || 'Please try after sometime.',
          code: response?.status || RESPONSE_ERROR,
        };
      })
  );
};

export default fiberPlanServicable;
