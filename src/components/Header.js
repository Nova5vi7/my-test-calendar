import React from "react";
import logo from "../img/logo.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__nav">
          <div className="header__btn-wrap">
            <button className="header__btn">HOME</button>
            <button className="header__btn">ABOUT US</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
