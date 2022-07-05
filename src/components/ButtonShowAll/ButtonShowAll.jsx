import React from "react";
import s from "./ButtonShowAll.module.scss";

function ButtonShowAll({ handleButton }) {
  return (
    <button className={s.button} onClick={() => handleButton()}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
}
export default ButtonShowAll;
