import React from "react";
import s from "./FilterGroupCheckbox.module.scss";
function FilterGroupCheckbox({ text, id, name, active, handleCheck }) {
  console.log("active", active);
  return (
    <li className={s.item}>
      <input
        onChange={() => handleCheck(name)}
        className={s.item__checkbox}
        type="checkbox"
        id={id}
        name={name}
        checked={active ? true : false}
      />
      <label htmlFor={id} className={s.item__text}>
        {text}
      </label>
    </li>
  );
}

export default FilterGroupCheckbox;
