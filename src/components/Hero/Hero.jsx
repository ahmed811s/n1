import "./Hero.css";
import { useState } from 'react';
import PopUp from '../pop/PopupForm';
import logo from './logo.webp';
const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(prevState => !prevState);
  };

  return (
    <section className="hero-container">
      <div>
        <h1 className="hero-title">
          <strong>En exklusivare tvätt med vaxning som skyddar hela vintern!</strong>
        </h1>
      </div>

      <div className="hero-card">
        <div className="hero-card-header">
          <h2>
            Just Nu fr. 995:- <span>(Ord. fr. 1.990:-)</span>
          </h2>
          <p>Inklusive en vaxning med ett hållbart skydd!</p>
        </div>

        <div className="hero-benefits">
          <p> Invändig rengöring: Få ett interiör som känns som nytt.</p>
          <p>
             Vaxning ger en djup och långvarig glans som ger din bil en snygg finish.
          </p>
          <p>
             Rengjorda fälgar ger din bil ett komplett och elegant utseende.
          </p>
          <p>
             Ren körupplevelse: Upplev renhet och fräschör i varje körning.
          </p>
          <p> Din bil är en investering، va rädd om den.</p>
        </div>
        
        <button className="hero-button" onClick={handleButtonClick}>Hämta Erbjudande</button>

        <div className="hero-logo">
          <img
            src={logo}
            alt="Ramnaslätt Bilvård Logo"
            loading="lazy"
          />
        </div>
      </div>

      {showPopup && <PopUp handleClosePopup={handleButtonClick} />} 
    </section>
  );
};

export default Hero;
