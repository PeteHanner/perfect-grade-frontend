/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// Calendar component for selecting or editing asgmt dates
const Calendar = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        props.setAsgmtDate(date);
      }}
      inline
    />
  );
};

export default Calendar;
