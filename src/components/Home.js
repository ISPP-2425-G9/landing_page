import React from "react";
import "../styles/Home.css";
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
    </div>
  );
};

export default Home;
