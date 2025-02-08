import React from "react";
import "./About.css";

const testimonials = [
  {
    name: "Armin Ajdarpasic",
    text: "Jag besökte Ramnaslätt Bilvård för en helrekond och blev otroligt imponerad av deras service. Poleringen var noggrant utförd och min bil glänste som aldrig förr. Jag rekommenderar dem verkligen!",
    source: "google",
  },
  {
    name: "Peppe Fasth",
    text: "Jag trodde knappt att det var min bil när jag såg den efter en helrekond. Dessutom doftar det som en ny bil inuti. Helt otroligt nöjd. Hit kommer jag garanterat att lämna fler gånger.",
    source: "google",
  },
  {
    name: "Fanny Bjarnemark",
    text: "De gjorde ett fantastiskt jobb med vår bil som fått svåra fläckar efter varit parkerad under ett träd. En vanlig biltvätt hade ingen effekt på fläckarna utan de behövde polera bilen för att bli av med dem. Vi är så nöja, vilket jobb!",
    source: "google",
  },
  {
    name: "Inki Ahlström",
    text: "5 stora hundar och små barnbarn ... skräckcenario men jäklar i min låda va fin hon blev. Kan VARMT rekommendera dessa om du ska fixa bilen.",
    source: "facebook",
  },
  {
    name: "Elinor Jensen",
    text: "Kan varmt rekommendera dessa killar bilen blev som ny. Tack igen för allt slit ni fick med min bil.",
    source: "facebook",
  },
  {
    name: "Tommy Bullen Olsson",
    text: "Väldigt nöjd. Kan med rent samvete rekommendera!",
    source: "facebook",
  },
];

const About = () => {
  return (
    <section className="about-section">
      <h2>VAD VÅRA TIDIGARE KUNDER SÄGER</h2>
      <div className="quote-symbol">”</div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{testimonial.name}</h3>
            <img
              src={testimonial.source === "google" ? "./z1.png" : "./z2.png"}
              alt={testimonial.source}
              className="source-icon"
            />
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
      
      
      <div className="button-container">
        <button className="offer-button pulse-effect">
          Hämta Erbjudande
          <span>Just Nu fr. 995:- (Ord. fr. 1.990:-)</span>
        </button>
      </div>
    </section>
  );
};

export default About;
