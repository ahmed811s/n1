import React, { useState } from "react";
import PopUp from "../pop/PopupForm";
import p11 from './p11.webp';
import ere from './ere.webp';
const Promo = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(prevState => !prevState);
  };

  return (
    <div className="promo-container">
      <div className="promo-left">
        <img src={ere} alt="Car icon" className="car-icon" loading="lazy" />
        <button className="offer-button pulse-effect" onClick={handleButtonClick}>
          <div>Hämta Erbjudande</div>
          <div className="price-text">Just Nu fr. 995:- (Ord. fr. 1.990:-)</div>
        </button>
      </div>
      <img src={p11} alt="Kampanjbild" className="promo-img" loading="lazy" />

      {showPopup && <PopUp handleClosePopup={handleButtonClick} />}
    </div>
  );
};

export default Promo;
