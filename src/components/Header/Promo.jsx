import React, { useState } from "react";
import PopUp from "../pop/PopupForm";
import p11 from './cw.webp';
import ere from './lgo.webp';
const Promo = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(prevState => !prevState);
  };

  return (
    <div className="promo-container">
      <div className="promo-left">
        <img src={lgo} alt="Car icon" className="car-icon" loading="lazy" />
        <button className="offer-button pulse-effect" onClick={handleButtonClick}>
          <div>Hämta Erbjudande</div>
          <div className="price-text">Just Nu fr. 995:- (Ord. fr. 1.990:-)</div>
        </button>
      </div>
      <img src={cw} alt="Kampanjbild" className="promo-img" loading="lazy" />

      {showPopup && <PopUp handleClosePopup={handleButtonClick} />}
    </div>
  );
};

export default Promo;
