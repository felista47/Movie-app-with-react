import React from "react";
import "./Main.css";
import Nav from "./Nav/Nav";
import {Outlet} from "react-router-dom";


function Main() {
  return (
    <div className="main">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Main;