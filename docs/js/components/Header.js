/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { IndexLink, Link } from "react-router";

const Header = () => (
  <header className="header">
    <img className="yingyang" src="./images/yingyang.png" alt="logo" />
    <h1>
      <img src="./images/logo.webp" alt="logo" />
    </h1>
  </header>
);

export default Header;
