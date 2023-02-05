import { trackPromise } from 'react-promise-tracker';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { SUCCESS } from '../../services/apisConstants';
import { useContext } from 'react';
import AppContext from '@/AppContext';

const getTimeSlot = async (orderId: any): Promise<responseType<any>> => {
  const value = useContext(AppContext);

  const {
    page: { errorMessages },
  } = value.state.languages;
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
          msg: data.messages || errorMessages.failedToGetTimeSlots,
          data,
        };
      })
      .catch((e: any) => {
        const { response } = e;
        return {
          status: false,
          msg: response?.data?.message || errorMessages.unableToFindFiberPlans,
        };
      })
  );
};

export default getTimeSlot;
