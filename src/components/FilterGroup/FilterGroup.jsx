import React from "react";
import s from "./FilterGroup.module.scss";
import FilterGroupCheckbox from "../FilterGroupCheckbox/FilterGroupCheckbox";
const FilterGroup = () => {
  return (
    <div className={s.container}>
      <h1 className={s.container__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <ul>
        <FilterGroupCheckbox text="Все" id="checbox1" />
        <FilterGroupCheckbox text="Без пересадок" id="checbox2" />
        <FilterGroupCheckbox text="1 пересадка" id="checbox3" />
        <FilterGroupCheckbox text="2 пересадки" id="checbox4" />
        <FilterGroupCheckbox text="3 пересадки" id="checbox5" />
      </ul>
    </div>
  );
};
export default FilterGroup;
