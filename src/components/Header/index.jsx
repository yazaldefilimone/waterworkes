import React from "react";
import logo from "../../assets/logo.svg";
import style from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <a href="#home">
        <img src={logo} alt="logo" />
        waterworks
      </a>

      <nav>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
