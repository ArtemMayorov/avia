import { initialState } from "../initialState";

const reducer = (state = initialState, action) => {
  const {
    filters: {
      allTranfsers,
      noTransfers,
      oneTransfer,
      twoTransfer,
      threeTransfer,
    },
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
        filters: {
          allTranfsers: !allTranfsers,
          noTransfers: !allTranfsers,
          oneTransfer: !allTranfsers,
          twoTransfer: !allTranfsers,
          threeTransfer: !allTranfsers,
        },
        transferCounter: 6,
      };

    case "FILTER_ON_TRANSFERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers:
            !noTransfers === true &&
            oneTransfer === true &&
            twoTransfer === true &&
            threeTransfer === true,
          noTransfers: !noTransfers,
        },
        transferCounter: 0,
      };
    case "FILTER_ONE_TRANSFERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers:
            !oneTransfer === true &&
            noTransfers === true &&
            twoTransfer === true &&
            threeTransfer === true,
          oneTransfer: !oneTransfer,
        },
        transferCounter: 1,
      };
    case "FILTER_TWO_TRANSFERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers:
            !twoTransfer === true &&
            noTransfers === true &&
            oneTransfer === true &&
            threeTransfer === true,
          twoTransfer: !twoTransfer,
        },
        transferCounter: 2,
      };
    case "FILTER_THREE_TRANSFERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          allTranfsers:
            !threeTransfer === true &&
            noTransfers === true &&
            twoTransfer === true &&
            oneTransfer === true,
          threeTransfer: !threeTransfer,
        },
        transferCounter: 3,
      };

    case "TICKET_DATA_SUCCESS":
      if (!state.tickets.tickets) {
        return {
          ...state,
          tickets: action.tickets,
        };
      }
      return {
        ...state,
        // tickets: action.tickets,
        tickets: {
          tickets: [...state.tickets.tickets, ...action.tickets.tickets],
        },
      };
    case "STOP_RECEIVING":
      return {
        ...state,
        stopReceiv: true,
      };
    case "BUTTON_SHOW_ALL":
      return {
        ...state,
        displayedTickets: state.displayedTickets + action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
