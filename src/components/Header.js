import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";


const Header = () => {
  return (
    <header>
      <div className="container header-content">
      <img src={`${process.env.PUBLIC_URL}/caronte_blanco.svg`} alt="Logo de Caronte" className="logo" />
      <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
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
