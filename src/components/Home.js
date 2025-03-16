import React, { useEffect } from "react";
import "../styles/Home.css";
import { FaShieldAlt, FaHandshake, FaCloud, FaUserCheck } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    // Animación inicial del hero
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    
    setTimeout(() => {
      if (title) {
        title.classList.add('fade-in');
      }
    }, 100); 
    
    setTimeout(() => {
      if (subtitle) {
        subtitle.classList.add('fade-in');
      }
    }, 500);

    // Efecto de scroll para la sección "Qué hacemos"
    const handleScroll = () => {
      const infoSection = document.querySelector('.caronte-info-container');
      if (!infoSection) return;

      const rect = infoSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const distanceFromCenter = (windowHeight / 2) - (rect.top + rect.height / 2);
      const maxDistance = windowHeight / 2 + rect.height / 2;
      
      const scrollProgress = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
      
      const scale = 0.9 + Math.abs(scrollProgress) * 0.2; 
      const translateY = scrollProgress * 20; 
      
      // Siempre mantener la opacidad al máximo para evitar la borrosidad
      infoSection.style.opacity = 1;
      infoSection.style.transform = `scale(${scale}) translateY(${translateY}px)`;

      if (Math.abs(scrollProgress) > 0.2) {
        infoSection.classList.add('in-view');
      } else {
        infoSection.classList.remove('in-view');
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">CARONTE</h1>
            <p className="hero-subtitle">
              <span className="highlight">Honrando</span> <span className="highlight">memorias,</span> <br />
              <span className="highlight">facilitando</span> <span className="highlight">despedidas</span>
            </p>
          </div>
          
        </div>
      </section>

      <section className="caronte-info">
        <div className="caronte-info-container">
          <h2>¿Qué hacemos?</h2>
          <p>
            ✔️ Somos una <strong>plataforma innovadora </strong>que te permite gestionar el envío de mensajes finales y esquelas digitales a tus contactos.
          </p>
          <p>
            ✔️ <strong>No queremos que dejes palabras sin decir.</strong> Tus mensajes se envían tras la confirmación del fallecimiento, garantizando la entrega en el momento adecuado.
          </p>
          <p>
            ✔️ Cumplimos tu último deseo facilitando despedidas seguras y recuerdos eternos.
          </p>
          <p>
            ✔️ Además, ofrecemos un espacio para que las empresas del sector funerario patrocinen sus servicios.
          </p>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features">
            <div className="feature">
              <FaShieldAlt size={40} color="#42B5FC" />
              <h3>Seguridad</h3>
              <p>Verificación de fallecimiento y cifrado seguro garantizan la integridad de tus mensajes.</p>
            </div>
            <div className="feature">
              <FaHandshake size={40} color="#42B5FC" />
              <h3>Confianza</h3>
              <p>Plataforma transparente y accesible para que no te preocupes por nada.</p>
            </div>
            <div className="feature">
              <FaUserCheck size={40} color="#42B5FC" />
              <h3>Automatización</h3>
              <p>Notificaciones automáticas a contactos de emergencia y envío de mensajes sin complicaciones.</p>
            </div>
            <div className="feature">
              <FaCloud size={40} color="#42B5FC" />
              <h3>Personalización</h3>
              <p>Personaliza mensajes y esquelas con fotos, videos y detalles del funeral.</p>
            </div>
          </div>
        </div>
      </section>

    <br /><br /><br /><br />
    </div>
  );
};

export default Home;
