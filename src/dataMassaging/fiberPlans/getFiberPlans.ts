import { trackPromise } from 'react-promise-tracker';
import { FiberPlanDTO } from '../../interface/types';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { SUCCESS } from '../../services/apisConstants';
import { errorsAr, errorsEn } from '@/constants/errorConstants';
import errorTranslations from '@/pages/utilities/errorTranslations';

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
          msg: errorTranslations(
            errorsEn.failedToGetFiberPlan,
            errorsAr.failedToGetFiberPlan
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
              errorsEn.unableToFindFiberPlans,
              errorsAr.unableToFindFiberPlans
            ),

          // 'Unable to find fiber plans. Try again later...',
        };
      })
  );
};

export default getFiberPlans;
