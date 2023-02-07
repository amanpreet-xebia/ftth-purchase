import { trackPromise } from 'react-promise-tracker';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { responseType } from '../../interface/responseType.interface';
import { RESPONSE_ERROR } from '../../services/apisConstants';
import { errorTranslations } from '@/pages/utilities/errorTranslations';
import { errorsAr, errorsEn } from '@/constants/errorConstants';

const bookAppointmentApi = async (
  paymentDetails: any,
  orderId: any
): Promise<responseType<any>> => {
  return trackPromise(
    fiberPlansService
      .bookAppointment(orderId, paymentDetails)
      .then((response: any) => {
        const { status, message, data } = response;
        if (message) {
          return {
            status: false,
            msg:
              data.messages ||
              errorTranslations(
                errorsEn.failedToBookAppointment,
                errorsAr.failedToBookAppointment
              ),

            data: {},
          };
        }
        return { status: status, msg: '', data };
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
        };
      })
  );
};

export default bookAppointmentApi;
