import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./components/App/App.js";
import reducer from "./redux/redusers.js";
import { Provider } from "react-redux";
import { sortByPrice, sortByTime } from "./redux/actions/actions";

let store = createStore(reducer, 0);
store.dispatch(sortByTime());
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
