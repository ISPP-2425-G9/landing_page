import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
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
                <a href="mailto:info@caronte.site">info@caronte.site</a>
              </p>
            </div>

            <div className="contact-item">
              <span className="icon">📞</span>
              <p>
                <a href="tel:+34615145215">+34 615 14 52 15</a>
              </p>
            </div>
          </div>
        </div>

        <div className="social-media">
          <h3>Nuestras redes sociales</h3>
          <div className="social-icons">
            <a href="https://whatsapp.com/channel/0029Vb8vAcUDzgTBG01Tdw1f" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/caronte-app/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=61573575124143" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://x.com/CaronteApp" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://instagram.com/caronteapp" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>            
            <a href="https://www.tiktok.com/@caronteapp" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://github.com/ISPP-2425-G9" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;