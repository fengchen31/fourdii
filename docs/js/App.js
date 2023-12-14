/* eslint-disable react/prop-types */
import React from "react";
import Header from "./components/Header";

const App = ({ children }) => (
  <div>
    <img className="yingyang" src="./images/yingyang.png" alt="logo" />
    <a
      className="shop"
      href="https://www.4dimensionapparel.com/products"
      target="_blank"
    >
      SHOP
    </a>
    <h1>
      <img src="./images/logo.png" alt="logo" className="logo" />
    </h1>
    <div className="content">{children}</div>
  </div>
);

export default App;
