import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo"><a href="#beranda">ZaskiaY</a></div>
        <div className="menu">
          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang-saya">Tentang Saya</a></li>
            <li><a href="#keahlian">Keahlian</a></li>
            <li><a href="#proyek">Proyek</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;