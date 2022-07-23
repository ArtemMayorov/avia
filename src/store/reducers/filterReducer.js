import { initialState } from '../initialState';
import actionTypes from '../constants';

const filterReducer = (state = initialState, action) => {
  const {
    FILTER_ALL_TRANSFERS,
    FILTER_ON_TRANSFERS,
    FILTER_ONE_TRANSFERS,
    FILTER_TWO_TRANSFERS,
    FILTER_THREE_TRANSFERS,
  } = actionTypes;
  const {
    filters: { allTranfsers, noTransfers, oneTransfer, twoTransfer, threeTransfer },
  } = state;
  switch (action.type) {
    case FILTER_ALL_TRANSFERS:
      return {
        ...state,
        filters: {
          allTranfsers: !allTranfsers,
          noTransfers: !allTranfsers,
          oneTransfer: !allTranfsers,
          twoTransfer: !allTranfsers,
          threeTransfer: !allTranfsers,
        },
        transferCounter: 6,
      };

    case FILTER_ON_TRANSFERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers: !noTransfers === true && oneTransfer === true && twoTransfer === true && threeTransfer === true,
          noTransfers: !noTransfers,
        },
        transferCounter: 0,
      };
    case FILTER_ONE_TRANSFERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers: !oneTransfer === true && noTransfers === true && twoTransfer === true && threeTransfer === true,
          oneTransfer: !oneTransfer,
        },
        transferCounter: 1,
      };
    case FILTER_TWO_TRANSFERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers: !twoTransfer === true && noTransfers === true && oneTransfer === true && threeTransfer === true,
          twoTransfer: !twoTransfer,
        },
        transferCounter: 2,
      };
    case FILTER_THREE_TRANSFERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers: !threeTransfer === true && noTransfers === true && twoTransfer === true && oneTransfer === true,
          threeTransfer: !threeTransfer,
        },
        transferCounter: 3,
      };

    default:
      return state;
  }
};
export default filterReducer;
