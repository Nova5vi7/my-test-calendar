import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarContainer({ openModal }) {
  const [value, onChange] = useState(new Date());

  const handleChange = (date) => {
    // console.log(moment(date));
    onChange(date);
    openModal(date);
  };

  const weekDayFormatter = (locale, date) => {
    return moment(date).format("dd")[0];
  };

  return (
    <Calendar
      onChange={handleChange}
      value={value}
      next2Label={null}
      prev2Label={null}
      locale="en"
      view="month"
      calendarType="US"
      maxDetail="month"
      formatShortWeekday={weekDayFormatter}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  openModal: (data) => {
    dispatch({
      type: "OPEN",
      payload: data,
    });
  },
});

export default connect(null, mapDispatchToProps)(CalendarContainer);
