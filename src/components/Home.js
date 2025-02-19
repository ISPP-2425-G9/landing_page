import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Tu <span className="highlight">legado</span>, en <span className="highlight">buenas manos</span>.</h1>
          <p>Planifica tus mensajes finales y esquelas personalizadas para que sean enviadas en el momento adecuado.</p>
          <a href="#services" className="btn-cta">Descubre más</a>
        </div>
        <div className="hero-logo">
          <img src={`${process.env.PUBLIC_URL}/caronte_gris.svg`} alt="Logo Caronte" className="big-logo"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
