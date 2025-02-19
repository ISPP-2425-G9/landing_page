import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos una plataforma segura para gestionar tu legado digital.</p>
        <div className="service-list">
          <div className="service">
            <h3>Mensajes Personalizados</h3>
            <p>Programa mensajes para ser enviados tras tu fallecimiento.</p>
          </div>
          <div className="service">
            <h3>Esquelas Digitales</h3>
            <p>Crea esquelas para tus seres queridos con total privacidad.</p>
          </div>
          <div className="service">
            <h3>Seguridad y Privacidad</h3>
            <p>Validación de identidad y cifrado de extremo a extremo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
