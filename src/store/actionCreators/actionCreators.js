import actionTypes from '../constants';

export const sortByPrice = () => ({ type: actionTypes.SORT_BY_PRICE });
export const sortByTime = () => ({ type: actionTypes.SORT_BY_TIME });
export const sortByAverage = () => ({ type: actionTypes.SORT_BY_AVERAGE });
export const filterAllTransfer = () => ({ type: actionTypes.FILTER_ALL_TRANSFERS });
export const filterOnTransfer = () => ({ type: actionTypes.FILTER_ON_TRANSFERS });
export const filterOneTransfer = () => ({ type: actionTypes.FILTER_ONE_TRANSFERS });
export const filterTworansfer = () => ({ type: actionTypes.FILTER_TWO_TRANSFERS });
export const filterThreeransfer = () => ({ type: actionTypes.FILTER_THREE_TRANSFERS });
const stopReceiving = () => ({ type: actionTypes.STOP_RECEIVING });

export const buttonShowAll = () => ({
  type: actionTypes.BUTTON_SHOW_ALL,
  payload: 5,
});

export const ticketFetchDateSuccess = (tickets) => {
  return {
    type: actionTypes.TICKET_DATA_SUCCESS,
    tickets: tickets,
  };
};
const _baseUrl = 'https://aviasales-test-api.kata.academy';
const getId = (searchId) => {
  return (dispatch) => {
    fetch(`${_baseUrl}/tickets?searchId=${searchId}`)
      .then((response) => {
        if (response.status === 500) {
          dispatch(getId(searchId));
          throw new Error();
        }
        return response.json();
      })
      .then((tickets) => {
        if (tickets.stop) {
          dispatch(stopReceiving());
          return;
        } else {
          dispatch(ticketFetchDateSuccess(tickets));
          dispatch(getId(searchId));
        }
      })
      .catch(() => {
        return {
          tickets: [],
        };
      });
  };
};

export const getTicketDate = () => {
  return (dispatch) => {
    fetch(`${_baseUrl}/search`)
      .then((response) => response.json())
      .then((searchId) => {
        dispatch(getId(searchId.searchId));
      })
      .catch(() => {
        return {
          tickets: [],
        };
      });
  };
};
