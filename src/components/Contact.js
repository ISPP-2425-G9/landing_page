import React, { useEffect } from "react";
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
  useEffect(() => {

    const title = document.querySelector('.contact h2');
    if (title) {
      title.classList.add('contact-title');
      setTimeout(() => {
        title.classList.add('title-visible');
      }, 100);
    }

    const subtitle = document.querySelector('.contact > .container > p');
    if (subtitle) {
      subtitle.classList.add('contact-subtitle');
      setTimeout(() => {
        subtitle.classList.add('subtitle-visible');
      }, 500);
    }

    const content = document.querySelector('.contact-details');
    const extraContent = document.querySelector('.contact-info-extra');
    const socialMedia = document.querySelector('.social-media');
    
    if (content) {
      content.classList.add('contact-content');
      setTimeout(() => {
        content.classList.add('content-visible');
      }, 1200);
    }
    
    if (extraContent) {
      extraContent.classList.add('contact-content');
      setTimeout(() => {
        extraContent.classList.add('content-visible');
      }, 1500);
    }
    
    if (socialMedia) {
      socialMedia.classList.add('contact-content');
      setTimeout(() => {
        socialMedia.classList.add('content-visible');
      }, 1800);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Mensaje de ${name} (${email})`;
    const body = encodeURIComponent(message);
    window.location.href = `mailto:info@caronte.site?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes alguna duda, sugerencia o simplemente quieres saludarnos? 
          <br />
          No dudes en ponerte en contacto con nosotros.
        </p>

        <div className="contact-details">
          <div className="contact-map">
            <h3>Ubicación</h3>
            <br />
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

          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <br />
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                required
              ></textarea>
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
          <br />
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
