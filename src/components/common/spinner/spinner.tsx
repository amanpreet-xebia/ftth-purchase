import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import CircularLoading from '../../../components/circularLoading';
import './spinner.css';

const Spinner = (props: any) => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress ? (
    <div className="spinner">
      <CircularLoading />
    </div>
  ) : (
    <></>
  );
};

export default Spinner;
