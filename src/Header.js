import React from "react";
import logo from "./logo.png";
import "./App.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="icon-trello">
          <img className="img-trello" src={logo} alt="Logo" />{" "}
        </div>
        <div className="header-right">
          <div className="btn log-in">Login</div>
          <div className="btn sign-up">sign up</div>
        </div>
      </div>
    </>
  );
}
