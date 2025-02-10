import React from "react";
import { useState } from 'react';
import PopUp from '../pop/PopupForm';
import "./Contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(prevState => !prevState);
  };

  return (
    <div className="contact-container">
      {/* النصوص */}
      <div className="content">
        <h2>Följande ingår i paketet</h2>
        <p>
          Vår process börjar med att vi tar emot din bil för en noggrann
          <br />
          utvändig behandling. Först tar vi bort asfalt och tjära för att
          <br />
          säkerställa att ytan är helt fri från envisa föroreningar. Därefter
          <br />
          applicerar vi avfettning för att lösa upp smuts och fett. Bilen
          <br />
          tvättas sedan med högtryckstvätt för att effektivt avlägsna alla
          <br />
          rengöringsmedel och smuts.
          <br />
        </p>
        <br />
        <p>
          Nästa steg är schamponering följt av en handtvätt, vilket
          <br /> garanterar att varje del av bilen blir skinande ren. Vi lägger
          <br /> särskild vikt vid fälgarna och tvättar dem noggrant, samt
          <br /> spolar av dörrkarmar och insteg för en komplett rengöring.
          <br /> Efter avspolning torkar vi bilen för hand för att undvika
          <br /> kalkfläckar och säkerställa en felfri yta. För att ge dina däck
          en
          <br /> fin finish applicerar vi däckglans, och slutligen putsar vi
          <br />
          fönstren utvändigt för en kristallklar sikt.
          <br />
        </p>
        <br />
        <p>
          För den invändiga behandlingen börjar vi med en grov <br/>dammsugning av
          samtliga ytor. Kupén rengörs noggrant och<br/> vi använder lufttryck för
          att fräscha upp hela interiören. Vi tar<br/> bort enstaka fläckar och
          rengör instrumentbrädan för att den <br/>ska se ut som ny. Mattorna får en
          grundlig rengöring och vi <br/>använder ångmaskin för att desinficera och
          fräscha upp hela <br/>interiören. Plastdelar behandlas med vinylvax för att
          ge dem <br/>en snygg och skyddande yta. Slutligen putsar vi fönstren<br/>
          invändigt för att säkerställa en klar och ren insida.<br/>
        </p>
      </div>
      <div className="c-column c-wrapper col-P-dIA6eDDC">
        <div>
          <div className="image">
        <img
          src="/public/2.webp"
          alt="Bilvård"
          className="car-image"
          loading="lazy"
        />
        <div />
        <div>
          <button className="cta-button" onClick={handleButtonClick}>
            Hämta Erbjudande
            <span>Just Nu fr. 995:- (Ord. fr. 1.990:-)</span>
          </button>
        </div>
        </div>
        
      </div>
      </div>
      {showPopup && <PopUp handleClosePopup={handleButtonClick} />}
    </div>
  );
};

export default Contact;
