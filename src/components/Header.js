import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [versionsOpen, setVersionsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleVersions = (e) => {
    setVersionsOpen(!versionsOpen);
  };

  return (
    <header>
      <div className="container header-content">
        <img
          src={`${process.env.PUBLIC_URL}/caronte_blanco.svg`}
          alt="Logo de Caronte"
          className="logo"
        />

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={menuOpen ? "open" : "desktop-menu"}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li className="versions-dropdown">
              <button onClick={toggleVersions} className="versions-toggle">
                Versiones ▾
              </button>
              <ul className={`versions-menu ${versionsOpen ? 'show' : ''}`}>
                <li><a href="http://sprint1.caronte.site" target="_blank" rel="noopener noreferrer">Sprint 1</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;