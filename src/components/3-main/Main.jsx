import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="image-container">
          <img src="/public/p2.png" alt="Luxury Car" loading="lazy" />
        </div>
        <div className="text-container">
          <h3 className="text-container h3"><strong>Varför välja oss?</strong></h3>
          <p>
            På Ramnaslätt Bilvård är vår främsta drivkraft att överträffa dina
            förväntningar varje gång du besöker oss. Oavsett bilens skick när den
            anländer, strävar vi alltid efter att låta den lämna oss i nyskick.
          </p>
          <p>
            Med en noggrann och professionell hand har vi dedikerat oss till att
            sätta dig som kund i fokus. Vi är övertygade om att våra tjänster ska
            erbjuda mer än bara rengöring utan de ska erbjuda en upplevelse av
            renhet, glans och kundnöjdhet. Lita på oss för att ta hand om din bil
            som om den vore vår egen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
