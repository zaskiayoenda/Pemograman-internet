import React from 'react';
import profilSticker from '../assets/Beranda.jpg';
import aboutSticker from '../assets/foto.jpeg';
import htmlCssIcon from '../assets/htmlcss.jpg';
import figmaIcon from '../assets/figma.png';
import cLangIcon from '../assets/bahasac.png';
import sqlIcon from '../assets/sql.png';
import canvaIcon from "../assets/canva.jpg";

const Content = () => {
  const profil = {
    nama: "Zaskia Yoenda",
    nim: "2505553",
    jurusan: "Pendidikan Ilmu Komputer",
    univ: "UPI Bandung",
    deskripsi: "Saya seorang mahasiswa Pendidikan Ilmu Komputer UPI yang sedang belajar web development."
  };

  // 2. Masukkan nama variabel gambar yang sudah di-import ke data skills
  const skills = [
    { nama: "HTML & CSS", icon: htmlCssIcon },
    { nama: "Figma", icon: figmaIcon },
    { nama: "C Programming", icon: cLangIcon },
    { nama: "MySQL", icon: sqlIcon },
    { nama: "Canva", icon: canvaIcon }
  ];

  const projects = [
    {
      id: 1,
      judul: "Si Coding",
      deskripsi: "Media pembelajaran interaktif pemikiran komputasional dan pemrograman C untuk siswa SMA.",
      kategori: "Web App / Edukasi"
    },
    {
      id: 2,
      judul: "Clustering UKM UPI",
      deskripsi: "Penerapan algoritma K-Means clustering untuk analisis perspektif mahasiswa terhadap organisasi kampus.",
      kategori: "Data Science"
    },
    {
      id: 3,
      judul: "Database perpustakaan",
      deskripsi: "Sistem pengelolaan basis data relasional perpustakaan menggunakan phpMyAdmin & XAMPP.",
      kategori: "Database"
    }
  ];

  return (
    <div className="wrapper">
     {/* Section Beranda */}
    <section id="beranda">
    <img src={profilSticker} alt="Foto Beranda" />
    <div className="kolom-beranda">
      <p className="deskripsi">Hallo, Saya....</p>
      <h2>{profil.nama}</h2>
      <p>NIM : {profil.nim}</p>
      <p><a href="#tentang-saya" className="tbl-pink">Next</a></p>
    </div>
  </section>

      {/* Section Tentang Saya */}
      <section id="tentang-saya">
        <div className="kolom">
          <p className="deskripsi">Tentang Saya</p>
          <h2>About Me</h2>
          <p>Saya {profil.nama}, merupakan mahasiswa dari {profil.jurusan} di {profil.univ}</p>
          <p>{profil.deskripsi}</p>
          <p><a href="#keahlian" className="tbl-biru">Next</a></p>
        </div>
        <img src={aboutSticker} alt="About Me Sticker" />
      </section>

      {/* Section Keahlian */}
      <section id="keahlian">
        <div className="kolom">
          <p className="deskripsi">Keahlian</p>
          <h2>Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} alt={skill.nama} className="skill-icon" />
                <span>{skill.nama}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Proyek */}
      <section id="proyek">
        <div className="kolom">
          <p className="deskripsi">Karya</p>
          <h2>Proyek Saya</h2>
          <div className="projects-grid">
            {projects.map((pj) => (
              <div key={pj.id} className="project-card">
                <span className="project-kategori">{pj.kategori}</span>
                <h3 style={{ margin: '8px 0', color: 'var(--text-h)' }}>{pj.judul}</h3>
                <p style={{ fontSize: '14px' }}>{pj.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;