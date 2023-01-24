'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StadiumButton from '../../components/stadiumButton';
import AppRoutes from '../../constants/appRoutes';
import NoticeCard from '../../components/noticeCard';
import AppContext from '../../AppContext';
import SelectableLabel from '../../components/selectableLabel';
import moment from 'moment';
import bookAppointmentApi from '../../dataMassaging/fiberPlans/bookAppointmentApi';
import {
  fiberOrderStatesRoute,
  getFiberRoutKey,
} from '../../constants/routeNavigationAccountState';
import getTimeSlot from '../../dataMassaging/fiberPlans/getTimeSlot';

import EmptyScreen from '../../components/emptyScreen';
import { AlertContext } from '../../context/alertContext/AlertContext';

export default function bookAppointment() {
  const value = useContext(AppContext);
  const {
    page: { BookAppointment: bookAppoint },
    confirm,
    // eslint-disable-next-line no-unsafe-optional-chaining
  } = value?.state?.languages;

  const { setOpen, setAlertMsg, setSeverity } = useContext(AlertContext);

  const navigation = useRouter();
  const orderId =
    typeof window !== 'undefined' ? localStorage.getItem('orderId') : '';
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimeSlot, setAvailableTimeSlot] = useState<any>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selTimeSlot, setSelTimeSlot] = useState('');
  const [checkApiCall, setCheckApiCall] = useState(false);

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
    if (orderId) {
      (async () => {
        const { status, msg, data } = await getTimeSlot(orderId);
        if (status && data?.availableSlots) {
          setAvailableTimeSlot(data?.availableSlots);
        } else {
          setOpen(true);
          setAlertMsg(msg || 'Error while fetching your order');
          setCheckApiCall(true);
          setSeverity('error');
          return false;
        }
      })();
    }
  }, []);
  const handleAppointment = async () => {
    if (!selTimeSlot) {
      setOpen(true);
      setAlertMsg('Please choose your convenient time slot');
      setSeverity('error');
      return false;
    }
    const { status, msg, data } = await bookAppointmentApi(
      { day: moment(selectedDate).format('YYYY-MM-DD'), time: selTimeSlot },
      orderId
    );

    if (status) {
      const routeData = {
        state: { orderId: orderId, token: data?.token },
      };

      if (data?.state?.trim()) {
        navigation.push(fiberOrderStatesRoute(data?.state));
        return;
      }
      // else {
      //   navigation.push(AppRoutes.orderSuccessfully);
      // }
    } else {
      setOpen(true);
      setAlertMsg(msg || 'Error while fetching your order');
      setSeverity('error');
    }
  };

  const dateHandler = (currentDate: any) => {
    setSelectedDate(moment(new Date(currentDate)).format('MM/DD/YYYY'));
  };

  const onLabelSelection = (dateWithTime: any) => {
    setSelectedDate(dateWithTime.split('_')[0]);
    setSelTimeSlot(dateWithTime.split('_')[1]);
  };

  return (
    <div>
      {availableTimeSlot?.length > 0 ? (
        <div className={'flex flex-col items-center '}>
          <div className="flex  flex-col dyn-mt items-stretch md:w-[70%]">
            <NoticeCard
              text={`${bookAppoint?.yourOrderNumber} #${orderId}`}
            ></NoticeCard>
          </div>
          <div className="mt-6 px-10 pt-6 w-full  text-white  bg-primary rounded-2xl md:w-5/6 lg:w-3/5 xl:w-1/2 ">
            <div className=" dyn-label-large">
              {bookAppoint?.bookInstallationDate}
            </div>
            <div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="w-full">
                  <p className="text-sm md:text-lg mt-8  md:my-2 text-center">
                    {bookAppoint?.availableDates}
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-sm md:text-lg mt-8  md:my-2">
                    {bookAppoint?.chooseATimeslot}
                  </p>
                </div>
              </div>
              {availableTimeSlot &&
                availableTimeSlot.map((ele: any) => (
                  <div
                    className="grid grid-cols-1 gap-3 md:grid-cols-2 mb-4"
                    style={{
                      background: '#b7b7b721',
                      padding: '20px',
                      borderRadius: '10px',
                    }}
                    key={ele.appointmentDate}
                  >
                    <div className="w-full">
                      <p className="text-sm md:text-2xl mt-8 font-light md:my-2 text-center">
                        {ele.appointmentDate}
                      </p>
                    </div>
                    <div className="w-full">
                      <div className=" grid grid-cols-2 gap-3 items-stretch">
                        {ele.appointmentTime &&
                          ele.appointmentTime.map((time: any, index: any) => (
                            <SelectableLabel
                              onClickEvent={onLabelSelection}
                              value={time}
                              currentDate={`${ele.appointmentDate}`}
                              selectedTimeSlot={selectedTimeSlot}
                              setSelectedTimeSlot={setSelectedTimeSlot}
                              dateWithTime={`${
                                ele.appointmentDate + '_' + time
                              }`}
                              key={index}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="w-40 my-10 flex float-right">
              <StadiumButton onClick={handleAppointment} text={confirm} />
            </div>
          </div>
        </div>
      ) : (
        checkApiCall && (
          <EmptyScreen
            title={bookAppoint?.emptyScreen?.noAvailableTimeSlots}
            subtitle={
              bookAppoint?.emptyScreen?.noTimeSlotsAreAvailableAtThisLocation
            }
            backBtn
            btnLabel={bookAppoint?.emptyScreen?.backToSalam}
            btnLink="https://test.salam.sa/en"
          />
        )
      )}
    </div>
  );
}
