import { trackPromise } from 'react-promise-tracker';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { responseType } from '../../interface/responseType.interface';
import { RESPONSE_ERROR } from '../../services/apisConstants';
import { useContext } from 'react';
import AppContext from '@/AppContext';

const bookAppointmentApi = async (
  paymentDetails: any,
  orderId: any
): Promise<responseType<any>> => {
  const value = useContext(AppContext);

  const {
    page: { errorMessages },
  } = value.state.languages;
  return trackPromise(
    fiberPlansService
      .bookAppointment(orderId, paymentDetails)
      .then((response: any) => {
        const { status, message, data } = response;
        if (message) {
          return {
            status: false,
            msg: data.messages || errorMessages.failedToBookAppointment,
            data: {},
          };
        }
        return { status: status, msg: '', data };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          code: response.status || RESPONSE_ERROR,
          msg: response?.data?.message || errorMessages.tryAfterSometime,
        };
      })
  );
};

export default bookAppointmentApi;
