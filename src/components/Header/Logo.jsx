import React from "react";
import logo from './logo.webp';
const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Företagslogotyp" className="logo-img" loading="lazy" />
    </div>
  );
};

export default Logo;
