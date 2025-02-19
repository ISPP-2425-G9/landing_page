import React from "react";
import "../styles/Contact.css";



const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contáctanos</h2>
        <p>Estamos aquí para ayudarte y resolver tus dudas</p>

        <div className="contact-info">
          <h3>Contacta con CARONTE</h3>
          <p>¿Tienes algo que comentarnos? Estamos aquí para ayudarte. Puedes enviarnos un correo electrónico o llamarnos al siguiente número.</p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>Avenida de Reina Mercedes, s/n, CP 41012, Sevilla</p>
            </div>

            <div className="contact-item">
              <span className="icon">✉️</span>
              <p>
                <a href="mailto:admin@caronte.site">admin@caronte.site</a>
              </p>
            </div>

            <div className="contact-item">
              <span className="icon">📞</span>
              <p>
                <a href="tel:+34626077466">+34 626 07 74 66</a>
              </p>
            </div>
          </div>
        </div>

        <div className="social-media">
          <h3>Nuestras redes sociales</h3>
          <div className="social-icons">
            <a href="https://jaime-linares.github.io/caronte-landingpage/" target="_blank" rel="noopener noreferrer">🌐</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
