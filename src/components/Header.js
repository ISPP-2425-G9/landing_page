import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Servicios</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>Sobre Nosotros</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <Link to="#" className="btn-login">Inicia Sesión</Link>
          <Link to="#" className="btn-register">Regístrate</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;