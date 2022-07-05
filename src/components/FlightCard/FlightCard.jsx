import React from "react";
import s from "./FlightCard.module.scss";
import FlightCardInfo from "../FlightCardInfo/FlightCardInfo";
import { formatPrice } from "../../helpers/FlightHelpers";

const FlightCard = ({ ticketProps, ticketProps: { price, carrier } }) => {
  const __imageBase = "https://pics.avs.io/99/36/";
  const imgAirlineLogo = carrier ? `${__imageBase}${carrier}.png` : null;

  return (
    <div className={s.container}>
      <div className={s.container__title}>
        <span className={s.container__cost}>{formatPrice(price)}</span>
        <img
          className={s.container__logoCompany}
          src={imgAirlineLogo}
          alt="Airline logo"
        />
      </div>
      <FlightCardInfo ticketProps={ticketProps} />
    </div>
  );
};
export default FlightCard;
