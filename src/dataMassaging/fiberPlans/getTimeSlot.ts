import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { SUCCESS } from '../../services/apisConstants';
import errorTranslations from '@/pages/utilities/errorTranslations';
import { errorsAr, errorsEn } from '@/constants/errorConstants';

const getTimeSlot = async (orderId: any): Promise<responseType<any>> => {
  return trackPromise(
    fiberPlansService
      .getTimeSlot(orderId)
      .then((response: any) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return { status: true, msg: '', data };
        }
        return {
          status: true,
          msg:
            data.messages ||
            errorTranslations(
              errorsEn.failedToGetTimeSlots,
              errorsAr.failedToGetTimeSlots
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
        };
      })
  );
};

export default getTimeSlot;
