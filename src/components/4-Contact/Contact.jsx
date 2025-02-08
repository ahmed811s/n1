import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* النصوص */}
      <div className="content">
        <h2>Följande ingår i paketet</h2>
        <p>
          Vår process börjar med att vi tar emot din bil för en noggrann utvändig behandling. 
          Först tar vi bort asfalt och tjära för att säkerställa att ytan är helt fri från envisa 
          föroreningar. Därefter applicerar vi avfettning för att lösa upp smuts och fett. 
          Bilen tvättas sedan med högtryckstvätt för att effektivt avlägsna alla rengöringsmedel och smuts.
        </p>
        <p>
          Nästa steg är schamponering följt av en handtvätt, vilket garanterar att varje del av bilen 
          blir skinande ren. Vi lägger särskild vikt vid fälgarna och tvättar dem noggrant, samt spolar av 
          dörrkarmar och insteg för en komplett rengöring. Efter avspolning torkar vi bilen för hand för att 
          undvika kalkfläckar och säkerställa en felfri yta.
        </p>
        <p>
          För den invändiga behandlingen börjar vi med en grov dammsugning av samtliga ytor. 
          Kupén rengörs noggrant och vi använder lufttryck för att fräscha upp hela interiören.
        </p>
      </div>

  
      <div className="image">
        <img src="/2.png" alt="Bilvård" className="car-image" loading="lazy"/>
        <div><button className="cta-button">
          Hämta Erbjudande
          <span>Just Nu fr. 995:- (Ord. fr. 1.990:-)</span>
        </button></div>
        
      </div>
    </div>
  );
};

export default Contact;
