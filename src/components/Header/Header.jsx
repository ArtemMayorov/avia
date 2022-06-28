import React from "react";
import s from "../Header/Header.module.scss";
import logoImage from "./Header-Image/av-logo.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.header__image} src={logoImage} alt="logo" />
    </div>
  );
};
export default Header;
