import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupForm.css';


const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const validateName = (name) => /^[a-zA-Z\s]*$/.test(name);
  const validatePhone = (phone) => /^(\+46|0)\d+$/.test(phone);
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;

    if (!validateName(name)) {
      alert("Ange namnet korrekt");
      return;
    }
    if (!validatePhone(phone)) {
      alert("Ange ett giltigt svenskt telefonnummer.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Ange en giltig e-postadress.");
      return;
    }

    navigate('/secpg'); // توجيه إلى صفحة Secpg
    closePopup();
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={closePopup}>×</button>
          <h1><strong>50% Rabatt:</strong></h1>
          <h2>Komplett Minirekond</h2>
          <h3>Just Nu fr. 995:- (Ord. fr. 1.990:-)
          ✅ Inklusive vaxning</h3>
          <form onSubmit={handleSubmit}>
            <label>
            För- & Efternamn *
              <input type="text" name="name" required placeholder='För- & Efternamn' />
            </label>
            <label>
              Telefonnummer *
              <input type="tel" name="phone" required placeholder='Telefonnummer'/>
            </label>
            <label>
            Mejladress *
              <input type="email" name="email" required placeholder='Mejladress'/>
            </label>
            <button type="submit" className="submit-button">Hämta Erbjudandet</button>
            <button type="button" className="close-button-large" onClick={closePopup}>Stäng och Fortsätt</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
