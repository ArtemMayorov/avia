import React from 'react';
import s from './FilterGroup.module.scss';
import * as actions from '../../store/actionCreators/actionCreators';
import { connect } from 'react-redux';

import FilterGroupCheckbox from '../FilterGroupCheckbox/FilterGroupCheckbox';
const FilterGroup = ({
  filterAllTransfer,
  filterOnTransfer,
  filterOneTransfer,
  filterTworansfer,
  filterThreeransfer,
  allTranfsers,
  noTransfers,
  oneTransfer,
  twoTransfer,
  threeTransfer,
}) => {
  const handleCheck = (name) => {
    if (name === 'FILTER_ALL_TRANSFERS') filterAllTransfer();
    if (name === 'FILTER_ON_TRANSFERS') filterOnTransfer();
    if (name === 'FILTER_ONE_TRANSFERS') filterOneTransfer();
    if (name === 'FILTER_TWO_TRANSFERS') filterTworansfer();
    if (name === 'FILTER_THREE_TRANSFERS') filterThreeransfer();
  };

  return (
    <div className={s.container}>
      <h1 className={s.container__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <ul>
        <FilterGroupCheckbox
          handleCheck={handleCheck}
          active={allTranfsers}
          text="Все"
          id="checbox1"
          name="FILTER_ALL_TRANSFERS"
        />
        <FilterGroupCheckbox
          handleCheck={handleCheck}
          active={noTransfers}
          text="Без пересадок"
          id="checbox2"
          name="FILTER_ON_TRANSFERS"
        />
        <FilterGroupCheckbox
          handleCheck={handleCheck}
          active={oneTransfer}
          text="1 пересадка"
          id="checbox3"
          name="FILTER_ONE_TRANSFERS"
        />
        <FilterGroupCheckbox
          handleCheck={handleCheck}
          active={twoTransfer}
          text="2 пересадки"
          id="checbox4"
          name="FILTER_TWO_TRANSFERS"
        />
        <FilterGroupCheckbox
          handleCheck={handleCheck}
          active={threeTransfer}
          text="3 пересадки"
          id="checbox5"
          name="FILTER_THREE_TRANSFERS"
        />
      </ul>
    </div>
  );
};
const mapStateToProps = ({ filterReducer }) => {
  const {
    filters: { allTranfsers, noTransfers, oneTransfer, twoTransfer, threeTransfer },
  } = filterReducer;

  return {
    allTranfsers,
    noTransfers,
    oneTransfer,
    twoTransfer,
    threeTransfer,
  };
};

export default connect(mapStateToProps, actions)(FilterGroup);
