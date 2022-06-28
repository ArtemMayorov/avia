import React from "react";
import s from "./TabButton.module.scss";
function TabButton({ text }) {
  return (
    <div>
      <button className={s.button}>{text}</button>
    </div>
  );
}

export default TabButton;
