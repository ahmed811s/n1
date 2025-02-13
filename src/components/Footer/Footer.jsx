import React from "react";
import "./Footer.css";
import lc from './lc.svg';
import gbs from './gbs.webp';
function Footer() {
  return (
    <div>
      <div className="G">
        <div></div>
        <div className="H">
            <img
              src={lc}
              alt="Företagslogotyp"
              className="loc"
              loading="lazy"
            />
          <h2>KONTAKT</h2>
          <p>
            Verkstadsgatan 2, 504 62 Borås <br /> 073-762 68 56
          </p>
          <p>
            <a href="">ramnaslattbilvard@gmail.com</a>
          </p>
        </div>

        <div>
          <a href="">
            <img src={gbs} className="gb" />
          </a>
        </div>
      </div>

      <p className="T">
        © 2023, Ramnaslätt Bilvård AB. All rights reserved. <br /> by Brenke
        Marketing AB
      </p>
    </div>
  );
}

export default Footer;
