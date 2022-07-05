import React from "react";
import classnames from "./Spinner.module.scss";

const Spinner = () => (
  <div className={classnames["lds-roller"]}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
