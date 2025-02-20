import React from "react";
import "../styles/Home.css";
import { FaShieldAlt, FaHandshake, FaCloud, FaUserCheck } from "react-icons/fa";  
import logo from "../caronte_gris.png";



const Home = () => {
  return (
    <div className="home-container"> 
      <section className="hero">
        <div className="container">
          <img src={logo} alt="Caronte Logo" className="hero-logo" />
          <div className="hero-text">
            <h1 className="hero-title">CARONTE</h1>
            <p className="hero-subtitle">
            <span>
              <span className="highlight">Honrando</span> <span className="highlight">memorias</span>,
            </span>
            <br />
            <span className="step2">
              <span className="highlight">facilitando</span> <span className="highlight">despedidas</span>
            </span>
            </p>
          </div>
        </div>
      </section>
      <div className="caronte-info">
        <h2>¿Qué es CARONTE?</h2>
        <p>
          CARONTE es una plataforma que permite a los usuarios gestionar el envío de mensajes finales y esquelas digitales 
          a una lista de contactos seleccionada. Garantizamos que los mensajes y esquelas sean enviados solo tras la 
          confirmación del fallecimiento, asegurando la entrega en el momento adecuado. Además, tendrás la opción de ver
          los servicios y ofertas que ofrecen varias empresas del sector.
        </p>
      </div>
      <section className="why-choose-us">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features">
            <div className="feature">
              <FaShieldAlt size={40} color="#3498db" />
              <h3>Seguridad</h3>
              <p>Utilizamos verificación de fallecimiento mediante certificado de defunción y cifrado seguro.</p>
            </div>
            <div className="feature">
              <FaHandshake size={40} color="#3498db" />
              <h3>Confianza</h3>
              <p>Somos una plataforma transparente, confiable y accesible para todos.</p>
            </div>
            <div className="feature">
              <FaUserCheck size={40} color="#3498db" />
              <h3>Automatización</h3>
              <p>El sistema notifica a contactos de emergencia y gestiona el envío de mensajes y esquelas.</p>
            </div>
            <div className="feature">
              <FaCloud size={40} color="#3498db" />
              <h3>Personalización</h3>
              <p>Ofrecemos la posibilidad de personalizar mensajes y esquelas con fotos, videos y datos del funeral.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <h2>¿Quiénes somos?</h2>
          <p>
            En CARONTE, somos un equipo comprometido en facilitar la gestión de la despedida digital. Nuestra plataforma está diseñada 
            para asegurar que los mensajes y esquelas sean enviados de manera organizada, respetando la voluntad del usuario.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
