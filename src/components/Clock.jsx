import React, { Fragment } from "react";
import './Clock.css'

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">

            <div className="days-container">
              <p>{timerDays}</p>
              <small>{timerDays === 1 ? "Dia" : "Dias"}</small>
            </div>

            <span>:</span>

            <div className="hours-container">
              <p>{('0' + timerHours).slice(-2)}</p>
              <small>{timerHours === 1 ? "Hora" : "Horas"}</small>
            </div>{" "}

            <span>:</span>

            <div className="minutes-container">
              <p>{('0' + timerMinutes).slice(-2)}</p>
              <small>{timerMinutes === 1 ? "Minuto" : "Minutos"}</small>
            </div>{" "}

            <span>:</span>

            <div className="seconds-container">
              <p>{('0' + timerSeconds).slice(-2)}</p>
              <small>{timerSeconds === 1 ? "Segundo" : "Segundos"}</small>
            </div>

          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;