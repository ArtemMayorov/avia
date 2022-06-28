import React from "react";
import Header from "../Header/Header.jsx";
import FilterGroup from "../FilterGroup/FilterGroup.jsx";
import NavBar from "../Tabs/Tabs";
import FlightList from "../FlightList/FlightList.jsx";
import FlightCard from "../FlightCard/FlightCard.jsx";
import s from "./App.module.scss";
function App() {
  return (
    <div className={s.appContainer}>
      <Header />
      <div className={s.navContainer}>
        <FilterGroup />
        <div className={s.filterContainer}>
          <NavBar />
          <FlightList />
        </div>
      </div>
    </div>
  );
}
export default App;
