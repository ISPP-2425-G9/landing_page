import React from "react";
import "../styles/Home.css";
import { FaShieldAlt, FaHandshake, FaCloud } from "react-icons/fa";  
import logo from "../caronte_gris.png";

const Home = () => {
  return (
    <div className="home-container"> 
      <section className="hero">
        <div className="container">
          <img src={logo} alt="Caronte Logo" className="hero-logo" />
          <div className="hero-text">
            <h1 className="hero-title">CARONTE</h1>
            <p className="hero-subtitle">Tu legado, en buenas manos</p>
          </div>
        </div>
      </section>
      <div className="caronte-info">
        <h2>¿Qué es Caronte?</h2>
        <p>
          Caronte es una plataforma innovadora que te ayuda a gestionar tu legado digital 
          de manera segura y eficiente. Nos aseguramos de que tu información más importante 
          permanezca accesible para quienes más importan.
        </p>
      </div>
      <section className="why-choose-us">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features">
            <div className="feature">
              <FaShieldAlt size={40} color="#3498db" />
              <h3>Seguridad</h3>
              <p>Contamos con un sistema de cifrado de extremo a extremo para proteger tus datos más valiosos.</p>
            </div>
            <div className="feature">
              <FaHandshake size={40} color="#3498db" />
              <h3>Confianza</h3>
              <p>Somos una plataforma transparente, confiable y accesible para todos.</p>
            </div>
            <div className="feature">
              <FaCloud size={40} color="#3498db" />
              <h3>Accesibilidad</h3>
              <p>Puedes gestionar tu legado digital desde cualquier lugar, en cualquier momento.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <h2>¿Quiénes somos?</h2>
          <p>
            En Caronte, nos apasiona ofrecer soluciones tecnológicas innovadoras para que puedas gestionar tu legado digital con seguridad y tranquilidad. 
            Nuestro equipo está compuesto por profesionales con amplia experiencia en seguridad digital y servicios funerarios, comprometidos con la protección de tus datos y el bienestar de los usuarios.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
