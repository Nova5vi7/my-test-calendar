import React from "react";
import Calendar from "./Calendar";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__content">
        <div className="home-page__wrap">
          <h1 className="home-page__title">CHOOSE THE DAY FOR THE MEETING</h1>
          <p className="home-page__text">
            We encourage you to book your appointment online. This will save you
            time.
          </p>
        </div>
      </div>
      <div className="home-page__calendar-wrp">
        <Calendar />
      </div>
    </div>
  );
}

export default HomePage;
