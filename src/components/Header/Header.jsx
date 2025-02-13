import React from "react";
import TopBar from "./TopBar";
import Logo from "./Logo";
import Offer from "./Offer";
import Promo from "./Promo";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container ">
      <TopBar />
      <Logo />
      <Offer />
      <Promo />
    </header>
  );
};

export default Header;
