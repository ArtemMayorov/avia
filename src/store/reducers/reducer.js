import { initialState } from "../initialState";

const reducer = (state = initialState, action) => {
  const {
    filterAllTicket,
    filters: { noTransfers, oneTransfer, twoTransfer, threeTransfer },
  } = state;

  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, activeSort: "SORT_BY_PRICE" };
    case "SORT_BY_TIME":
      return { ...state, activeSort: "SORT_BY_TIME" };
    case "SORT_BY_AVERAGE":
      return {
        ...state,
        activeSort: "SORT_BY_AVERAGE",
      };
    case "FILTER_ALL_TRANSFERS":
      return {
        ...state,
        filterAllTicket: !filterAllTicket,
        filters: {
          noTransfers: !noTransfers,
          oneTransfer: !oneTransfer,
          twoTransfer: !twoTransfer,
          threeTransfer: !threeTransfer,
        },
      };
    case "FILTER_ON_TRANSFERS":
      return {
        ...state,
        filterAllTicket: false,
        filters: {
          noTransfers: !noTransfers,
        },
      };
    case "FILTER_TWO_TRANSFERS":
      return {
        ...state,
        filterAllTicket: false,
        filters: {
          twoTransfer: !twoTransfer,
        },
      };
    case "FILTER_THREE_TRANSFERS":
      return {
        ...state,
        filterAllTicket: false,
        filters: {
          threeTransfer: !threeTransfer,
        },
      };

    default:
      return state;
  }
};
export default reducer;
