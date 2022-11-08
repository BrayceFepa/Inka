import React from "react";
import logo from "../../assets/LogoCAYSTI1.png";
import CountDown from "../CountDown/CountDown";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <CountDown />


      </div>
        
    </div>
  );
};

export default Header;
