import { initialState } from '../initialState';
import actionTypes from '../constants';

const ticketsReducer = (state = initialState, action) => {
  const { TICKET_DATA_SUCCESS, STOP_RECEIVING, BUTTON_SHOW_ALL } = actionTypes;

  switch (action.type) {
    case TICKET_DATA_SUCCESS:
      if (!state.tickets.tickets) {
        return {
          ...state,
          tickets: action.tickets,
        };
      }
      return {
        ...state,
        tickets: {
          tickets: [...state.tickets.tickets, ...action.tickets.tickets],
        },
      };
    case STOP_RECEIVING:
      return {
        ...state,
        stopReceiv: true,
      };
    case BUTTON_SHOW_ALL:
      return {
        ...state,
        displayedTickets: state.displayedTickets + action.payload,
      };
    default:
      return state;
  }
};
export default ticketsReducer;
