import React from "react";
import s from "./FlightCard.module.scss";
import companyLogo from "./FlightCardImages/company.svg";
const FlightCard = () => {
  return (
    <div className={s.container}>
      <div className={s.container__title}>
        <span className={s.container__cost}>13 400 Р</span>
        <img className={s.container__logoCompany} src={companyLogo} />
      </div>
      <div className={s.flightInfo}>
        <div className={s.rout}>
          <span className={s.flightInfo__title}>MOW – HKT</span>
          <span className={s.flightInfo__description}>10:45 – 08:00</span>
          <span className={s.flightInfo__title}>MOW – HKT</span>
          <span className={s.flightInfo__description}>11:20 – 00:50</span>
        </div>
        <div className={s.path}>
          <span className={s.flightInfo__title}>В ПУТИ</span>
          <span className={s.flightInfo__description}>21ч 15м</span>
          <span className={s.flightInfo__title}>В ПУТИ</span>
          <span className={s.flightInfo__description}>13ч 30м</span>
        </div>
        <div className={s.transfer}>
          <span className={s.flightInfo__title}>2 ПЕРЕСАДКИ</span>
          <span className={s.flightInfo__description}>HKG, JNB</span>
          <span className={s.flightInfo__title}>1 ПЕРЕСАДКА</span>
          <span className={s.flightInfo__description}>HKG</span>
        </div>
      </div>
    </div>
  );
};
export default FlightCard;
