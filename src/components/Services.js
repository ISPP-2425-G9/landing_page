import React, { useEffect } from "react";
import { FaBusinessTime, FaCalendarCheck, FaRegAddressBook } from "react-icons/fa";
import "../styles/Services.css";

const servicesData = [
  {
    title: "Esquelas Digitales",
    description: "Crea y envía cuando quieras esquelas personalizadas para tus seres queridos.",
    price: "1.99€/esquela",
    icon: <FaCalendarCheck />, 
    type: "user", 
  },
  {
    title: "Plan mensual",
    description: "Deja mensajes totalmente personalizados que serán enviados tras la confirmación de tu fallecimiento.",
    price: "0.99€/mes",
    icon: <FaRegAddressBook />,
    type: "user", 
  },
  {
    title: "Publicidad para Empresas",
    description: "Publicita tu empresa relacionada con el sector funerario (funeraria, notaría, floristería, etc.) para que más clientes puedan conocer tus servicios.",
    price: "9.99€/mes",
    icon: <FaBusinessTime />, 
    type: "company", 
  }
];

const Services = () => {
  useEffect(() => {
    const title = document.querySelector('.services h2');
    if (title) {
      title.classList.add('title-animation');
      setTimeout(() => {
        title.classList.add('title-visible');
      }, 100);
    }

    const subtitle = document.querySelector('.services h3');
    if (subtitle) {
      subtitle.classList.add('subtitle-animation');
      setTimeout(() => {
        subtitle.classList.add('subtitle-visible');
      }, 500);
    }

    const services = document.querySelectorAll('.service-wrapper');
    services.forEach((service, index) => {
      service.classList.add('service-animation');
      setTimeout(() => {
        service.classList.add('service-visible');
      }, 1000 + (300 * index));
    });
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros servicios</h2>
        <h3>Ofrecemos una plataforma segura para gestionar tu legado digital y comunicación post-mortem.</h3>

        <div className="service-grid">
          {servicesData.map((service, index) => (
            <div className="service-wrapper" key={index} style={{ transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
              <div className={`service ${service.type}`}>
                <div className="icon">{service.icon}</div>
                {service.type === "company" && <span className="badge">Empresas</span>}
                <h3>{service.title}</h3>
                <p style={{ textAlign: "center" }}>{service.description}</p>
                <p className="price">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
