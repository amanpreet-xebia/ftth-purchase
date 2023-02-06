import { trackPromise } from 'react-promise-tracker';
import { FiberPlanDTO } from '../../interface/types';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { SUCCESS } from '../../services/apisConstants';

const getFiberPlans = async (): Promise<responseType<FiberPlanDTO[]>> => {
  return trackPromise(
    fiberPlansService
      .getFiberPlans()
      .then((response: any) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return { status: true, msg: '', data };
        }

        return {
          status: false,
          msg: 'Failed for get fiber plans',
          data,
        };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          msg:
            response?.data?.message ||
            'Unable to find fiber plans. Try again later...',
        };
      })
  );
};

export default getFiberPlans;
