import ticketsServiсe from "../../ticketsServiсe/ticketsServiсe";
const serviсe = new ticketsServiсe();

export const sortByPrice = () => ({ type: "SORT_BY_PRICE" });
export const sortByTime = () => ({ type: "SORT_BY_TIME" });
export const sortByAverage = () => ({ type: "SORT_BY_AVERAGE" });
export const filterAllTransfer = () => ({ type: "FILTER_ALL_TRANSFERS" });
export const filterOnTransfer = () => ({ type: "FILTER_ON_TRANSFERS" });
export const filterOneTransfer = () => ({ type: "FILTER_ONE_TRANSFERS" });
export const filterTworansfer = () => ({ type: "FILTER_TWO_TRANSFERS" });
export const filterThreeransfer = () => ({ type: "FILTER_THREE_TRANSFERS" });
const stopReceiving = () => ({ type: "STOP_RECEIVING" });

// будем увеличивать текущее значение displayedTickets на 5
export const buttonShowAll = () => ({
  type: "BUTTON_SHOW_ALL",
  payload: 5,
});

export const ticketFetchDateSuccess = (tickets) => {
  return {
    type: "TICKET_DATA_SUCCESS",
    tickets: tickets,
  };
};

const idFetch = (searchId) => {
  return (dispatch) => {
    fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((tickets) => {
        if (tickets.stop) {
          console.log("1");
          // dispatch(ticketFetchDateSuccess(tickets));
          dispatch(stopReceiving());
          return;
        } else {
          console.log("2");
          dispatch(ticketFetchDateSuccess(tickets));
          dispatch(idFetch(searchId));
        }
      })
      .catch((err) => {
        if (err.status === 500) {
          dispatch(idFetch(searchId));
          console.log("500");
        }
      });
  };
};

// const idFetch = (searchId) => {
//   return (dispatch) => {
//     fetch(
//       `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
//     )
//       .then((response) => {
//         if (response.stop) dispatch(stopReceiving);
//         return response.json();
//       })
//       .then((tickets) => dispatch(ticketFetchDateSuccess(tickets)));
//   };
// };

export const ticketFetchDate = () => {
  return (dispatch) => {
    fetch("https://aviasales-test-api.kata.academy/search")
      .then((response) => response.json())
      .then((searchId) => {
        dispatch(idFetch(searchId.searchId));
      })
      .catch((err) => {
        console.log("err");
        // dispatch(ticketFetchDate());
      });
  };
};
