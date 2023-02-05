import { trackPromise } from 'react-promise-tracker';
import { FiberPlanDTO } from '../../interface/types';
import { responseType } from '../../interface/responseType.interface';
import fiberPlansService from '../../services/fiberPlansServices/fiberPlansService';
import { SUCCESS } from '../../services/apisConstants';
import { useContext } from 'react';
import AppContext from '@/AppContext';

const getFiberPlans = async (): Promise<responseType<FiberPlanDTO[]>> => {
  const value = useContext(AppContext);

  const {
    page: { errorMessages },
  } = value.state.languages;
  return trackPromise(
    fiberPlansService
      .getFiberPlans()
      .then((response: any) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          return { status: true, msg: '', data };
        }

        return { status: false, msg: errorMessages.failedToGetFiberPlan, data };
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

export default getFiberPlans;
