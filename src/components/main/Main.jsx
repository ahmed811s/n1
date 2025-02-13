import React from "react";
import "./Main.css";
import lux from './lux.webp';
const Main = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="image-containser">
          <img src={lux} alt="Luxury Car" loading="lazy" />
        </div>
        <div className="text-container">
          <h3 className="text-container h3">
            <strong>Varför välja oss?</strong>
          </h3>
          <p>
            På Ramnaslätt Bilvård är vår främsta drivkraft att
            <br /> överträffa dina förväntningar varje gång du besöker
            <br /> oss. Oavsett bilens skick när den anländer, strävar vi
            <br /> alltid efter att låta den lämna oss i nyskick.
          </p>
          <br />
          <p>
            Med en noggrann och professionell hand har vi
            <br /> dedikerat oss till att sätta dig som kund i fokus. Vi är
            <br /> övertygade om att våra tjänster ska erbjuda mer än
            <br /> bara rengöring utan de ska erbjuda en upplevelse av
            <br />
            renhet, glans och kundnöjdhet. Lita på oss för att ta
            <br /> hand om din bil som om den vore vår egen.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
