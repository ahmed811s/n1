import "./Hero.css";

const Hero = () => {
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

        <ul className="hero-benefits">
          <li>➤ Invändig rengöring: Få ett interiör som känns som nytt.</li>
          <li>
            ➤ Vaxning ger en djup och långvarig glans som ger din bil en snygg
            finish.
          </li>
          <li>
            ➤ Rengjorda fälgar ger din bil ett komplett och elegant utseende.
          </li>
          <li>
            ➤ Ren körupplevelse: Upplev renhet och fräschör i varje körning.
          </li>
          <li>➤ Din bil är en investering, va rädd om den.</li>
        </ul>

        <button className="hero-button">Hämta Erbjudande</button>

        <div className="hero-logo">
          <img
            src="/public/r1.webp"
            alt="Ramnaslätt Bilvård Logo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
