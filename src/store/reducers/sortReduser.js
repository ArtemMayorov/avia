import { initialState } from '../initialState';
import actionTypes from '../constants';

const sortReducer = (state = initialState, action) => {
  const { SORT_BY_PRICE, SORT_BY_TIME, SORT_BY_AVERAGE } = actionTypes;

  switch (action.type) {
    case SORT_BY_PRICE:
      return { ...state, activeSort: SORT_BY_PRICE };
    case SORT_BY_TIME:
      return { ...state, activeSort: SORT_BY_TIME };
    case SORT_BY_AVERAGE:
      return {
        ...state,
        activeSort: SORT_BY_AVERAGE,
      };

    default:
      return state;
  }
};
export default sortReducer;
