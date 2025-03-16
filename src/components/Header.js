import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [versionsOpen, setVersionsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleVersionsClick = () => {
    setVersionsOpen(currentState => !currentState);
  };

  return (
    <header>
      <div className="container header-content">
        <img
          src={`${process.env.PUBLIC_URL}/caronte_blanco.svg`}
          alt="Logo de Caronte"
          className="logo"
          onClick={() => window.location.href = "/"}
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
              <button 
                type="button"
                onClick={handleVersionsClick} 
                className="versions-toggle"
              >
                Versiones {versionsOpen ? '▴' : '▾'}
              </button>
              <ul className={`versions-menu ${versionsOpen ? 'show' : ''}`}>
                <li><a href="//sprint1.caronte.site" target="_blank" rel="noreferrer">Sprint 1</a></li>
                <li><a href="//sprint2.caronte.site" target="_blank" rel="noreferrer">Sprint 2 (beta)</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;