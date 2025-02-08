import React from "react";

const Promo = () => {
  return (
    <div className="promo-container">
      <div className="promo-left">
        <img src="/public/ere.png" alt="Car icon" className="car-icon" loading="lazy" />
        <button className="offer-button pulse-effect">
          <div>Hämta Erbjudande</div>
          <div className="price-text">Just Nu fr. 995:- (Ord. fr. 1.990:-)</div>
        </button>
      </div>
      <img src="/p11.png" alt="Kampanjbild" className="promo-img" loading="lazy"/>
    </div>
  );
};

export default Promo;
