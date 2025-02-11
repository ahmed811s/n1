import React from 'react';
import './sec.css'; // يمكنك إنشاء ملف CSS منفصل للأنماط

function Secpg() {
  return (
    <div className="ramnaslatt-page">
      {/* الجزء العلوي مع الصورة */}
      <div className="header-section">
        <img
          src="URL_TO_YOUR_LOGO" // استبدل هذا برابط الشعار الفعلي
          alt="Ramnaslätt Bilvård Logo"
          className="logo"
        />
        <h1 className="thank-you-text">Tack för din ansökan!</h1>
        <p className="booking-info">
          Vi kommer inom kort att ringa upp dig för att slutföra din bokning!
          <br />
          / Teamet på Ramnaslätt Bilvård
        </p>
      </div>

      {/* جزء الخريطة ومعلومات الاتصال */}
      <div className="map-section">
        <h2>Hitta till oss</h2>
        <p>Verkstadsgatan 2, 504 62 Borås</p>
        <img
          src="https://pplx-res.cloudinary.com/image/upload/v1739279490/user_uploads/uKivdNZnIPCKJcJ/second.jpg" // استبدل هذا برابط الخريطة الفعلي
          alt="Map of Verkstadsgatan 2, Borås"
          className="map-image"
        />
      </div>

      {/* الحقوق */}
      <div className="copyright-section">
        © 2023, Ramnaslätt Bilvård AB. All rights reserved.
      </div>
    </div>
  );
}

export default Secpg;
