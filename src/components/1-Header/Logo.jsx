import React from "react";
import r1 from './r1.webp';
const Logo = () => {
  return (
    <div className="logo-container">
      <img src={r1} alt="Företagslogotyp" className="logo-img" loading="lazy" />
    </div>
  );
};

export default Logo;
