import { initialState } from "./store";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: "SORT_BY_PRICE" };
    case "SORT_BY_TIME":
      return { ...state, sort: "SORT_BY_TIME" };
    case "SORT_BY_AVERAGE":
      return { ...state, sort: "SORT_BY_AVERAGE" };

    default:
      return state;
  }
};
export default reducer;
