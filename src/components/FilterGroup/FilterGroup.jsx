import React from "react";
import s from "./FilterGroup.module.scss";
import * as actions from "../../store/actionCreators/actionCreators";
import { connect } from "react-redux";

import FilterGroupCheckbox from "../FilterGroupCheckbox/FilterGroupCheckbox";
const FilterGroup = ({
  filterAllTicket,
  noTransfers,
  oneTransfer,
  twoTransfer,
  threeTransfer,
}) => {
  console.log("filterAllTicket", filterAllTicket);
  return (
    <div className={s.container}>
      <h1 className={s.container__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <ul>
        <FilterGroupCheckbox
          active={filterAllTicket}
          text="Все"
          id="checbox1"
        />
        <FilterGroupCheckbox
          active={noTransfers}
          text="Без пересадок"
          id="checbox2"
        />
        <FilterGroupCheckbox
          active={oneTransfer}
          text="1 пересадка"
          id="checbox3"
        />
        <FilterGroupCheckbox
          active={twoTransfer}
          text="2 пересадки"
          id="checbox4"
        />
        <FilterGroupCheckbox
          active={threeTransfer}
          text="3 пересадки"
          id="checbox5"
        />
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  const {
    filterAllTicket,
    filters: { noTransfers, oneTransfer, twoTransfer, threeTransfer },
  } = state;

  return {
    filterAllTicket,
    noTransfers,
    oneTransfer,
    twoTransfer,
    threeTransfer,
  };
};

export default connect(mapStateToProps)(FilterGroup);
