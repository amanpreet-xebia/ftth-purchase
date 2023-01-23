import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { SUCCESS } from '../../services/apisConstants';

const getTimeSlot = async (orderId: any): Promise<responseType<any>> => {
  return trackPromise(
    fiberPlansService
      .getTimeSlot(orderId)
      .then((response :any) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return { status: true, msg: '', data };
        }
        return { status: true, msg: data.messages || 'Failed to get time slots', data };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          msg: response?.data?.message || 'Unable to fiber plans. Try again later...'
        };
      })
  );
};

export default getTimeSlot;
