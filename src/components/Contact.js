import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import "../styles/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar el formulario (por ejemplo, a un backend o servicio de email)
    console.log("Formulario enviado");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes algo que comentarnos? Estamos aquí para ayudarte. Puedes
          enviarnos un correo electrónico o llamarnos al siguiente número.
        </p>

        <div className="contact-details">
          {/* Columna de mapa */}
          <div className="contact-map">
            <h3>Ubicación</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6342.67312084915!2d-5.989684023552625!3d37.358212536045464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126dd4a3055555%3A0x29c3f634f8a021b8!2sEscuela%20T%C3%A9cnica%20Superior%20de%20Ingenier%C3%ADa%20Inform%C3%A1tica!5e0!3m2!1ses!2ses!4v1741824402518!5m2!1ses!2ses"
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación"
              ></iframe>
            </div>
          </div>

          {/* Columna de formulario */}
          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Tu mensaje" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>

        <div className="contact-info-extra">
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

        <div className="social-media">
          <h3>Nuestras redes sociales</h3>
          <div className="social-icons">
            <a
              href="https://whatsapp.com/channel/0029Vb8vAcUDzgTBG01Tdw1f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/caronte-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573575124143"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/CaronteApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/caronteapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@caronteapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://github.com/ISPP-2425-G9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
