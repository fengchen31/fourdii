/* eslint-disable react/prop-types */
import React from "react";
import Header from "./components/Header";

const App = ({ children }) => (
  <div>
    <Header />
    <a
      className="shop"
      href="https://www.4dimensionapparel.com/products"
      target="_blank"
    >
      SHOP
    </a>
    <img className="yingyang" src="../images/yingyang.png" alt="logo" />
    <div className="content">{children}</div>
  </div>
);

export default App;
