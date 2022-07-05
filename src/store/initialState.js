export const initialState = {
  activeSort: "SORT_BY_PRICE",
  filters: {
    allTranfsers: false,
    noTransfers: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false,
  },
  tickets: [],
  stopReceiv: false,
  displayedTickets: 5,
  transferCounter: 6, // мы не знаем максимально допустимое количество пересадок
};
