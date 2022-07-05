import React from "react";
import s from "./FlightCardInfo.module.scss";
import {
  declOfNum,
  calculateTransferTime,
  formatTime,
} from "../../helpers/FlightHelpers";
function FlightCardInfo({ ticketProps: { segments } }) {
  const [sectionOne, sesctionTwo] = segments;
  const {
    origin: oneOrigin,
    destination: oneDestination,
    duration: oneDuration,
    date: oneDate,
    stops: oneStops,
  } = sectionOne;
  const {
    origin: twoOrigin,
    destination: twoDestination,
    duration: twoDuration,
    date: twoDate,
    stops: twoStops,
  } = sesctionTwo;

  return (
    <div className={s.flightInfo}>
      <div className={s.rout}>
        <span
          className={s.flightInfo__title}
        >{`${oneOrigin} – ${oneDestination}`}</span>
        <span className={s.flightInfo__description}>
          {calculateTransferTime(oneDate, oneDuration)}
        </span>
        <span
          className={s.flightInfo__title}
        >{`${twoOrigin} – ${twoDestination}`}</span>
        <span className={s.flightInfo__description}>
          {calculateTransferTime(twoDate, twoDuration)}
        </span>
      </div>
      <div className={s.path}>
        <span className={s.flightInfo__title}>В ПУТИ</span>

        <span className={s.flightInfo__description}>
          {formatTime(oneDuration)}
        </span>
        <span className={s.flightInfo__title}>В ПУТИ</span>
        <span className={s.flightInfo__description}>
          {formatTime(twoDuration)}
        </span>
      </div>
      <div className={s.transfer}>
        <div className={s.wrapper}>
          <span className={s.flightInfo__title}>
            {declOfNum(oneStops.length)}
          </span>
          <span className={s.flightInfo__description}>
            {oneStops.join(", ")}
          </span>
        </div>
        <span className={s.flightInfo__title}>
          {declOfNum(twoStops.length)}
        </span>
        <span className={s.flightInfo__description}>{twoStops.join(", ")}</span>
      </div>
    </div>
  );
}

export default FlightCardInfo;
