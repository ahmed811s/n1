import React, { useState, useEffect } from 'react';
import './PopupForm.css';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

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
      alert("يرجى إدخال الاسم بشكل صحيح.");
      return;
    }
    if (!validatePhone(phone)) {
      alert("يرجى إدخال رقم هاتف سويدي صحيح.");
      return;
    }
    if (!validateEmail(email)) {
      alert("يرجى إدخال بريد إلكتروني صحيح.");
      return;
    }

    // تنفيذ العمليات المطلوبة عند الإرسال
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={closePopup}>×</button>
          <h2>Komplett Minirekond</h2>
          <form onSubmit={handleSubmit}>
            <label>
              För- & Efternamn
              <input type="text" name="name" required />
            </label>
            <label>
              Telefonnummer
              <input type="tel" name="phone" required />
            </label>
            <label>
              E-postadress
              <input type="email" name="email" required />
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
