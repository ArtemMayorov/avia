import React from "react";
import TabButton from "../TabButton/TabButton";
import s from "./Tabs.module.scss";

const NavBar = () => {
  return (
    <div className={s.container}>
      <TabButton text="САМЫЙ ДЕШЕВЫЙ" />
      <TabButton text="САМЫЙ БЫСТРЫЙ" />
      <TabButton text="ОПТИМАЛЬНЫЙ" />
    </div>
  );
};
export default NavBar;
