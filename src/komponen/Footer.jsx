import React from 'react';

const Footer = () => {
  const kontak = {
    phone: "+62 85172170611",
    alamat: "Jln. Gegerkalong",
    email: "zaskiayo@gmail.com",
    instagram: "@yoendas"
  };

  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          <div className="footer-section">
            <h3>📱 No hp</h3>
            <p>{kontak.phone}</p>
          </div>
          <div className="footer-section">
            <h3>📍 Alamat</h3>
            <p>{kontak.alamat}</p>
          </div>
          <div className="footer-section">
            <h3>✉️ Email</h3>
            <p>{kontak.email}</p>
          </div>
          <div className="footer-section">
            <h3>Social Media</h3>
            <p><b>Instagram: </b>{kontak.instagram}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;