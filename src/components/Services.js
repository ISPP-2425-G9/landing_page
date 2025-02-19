import React from "react";
import "../styles/Services.css";
import { FaEnvelope, FaCalendarCheck, FaLock, FaBusinessTime, FaRegAddressBook } from "react-icons/fa"; 

const servicesData = [
  {
    title: "Mensajes Personalizados",
    description: "Permite enviar mensajes personales tras el fallecimiento con validación.",
    price: "Gratis",
    icon: <FaEnvelope />, 
    type: "user", 
  },
  {
    title: "Esquelas Digitales",
    description: "Crea y envía cuando quieras esquelas personalizadas para tus seres queridos.",
    price: "$1.99",
    icon: <FaCalendarCheck />, 
    type: "user", 
  },
  {
    title: "Contratos de Servicios",
    description: "Crea contratos de servicios funerarios para garantizar la planificación.",
    price: "$0.99/mes",
    icon: <FaRegAddressBook />,
    type: "user", 
  },
  {
    title: "Publicidad para Empresas",
    description: "Publicita tu funeraria o servicios funerarios en la plataforma.",
    price: "9.99€/mes",
    icon: <FaBusinessTime />, 
    type: "company", 
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos una plataforma segura para gestionar tu legado digital y servicios funerarios.</p>

        <div className="service-grid">
          {servicesData.map((service, index) => (
            <div className={`service ${service.type}`} key={index}>
              <div className="icon">{service.icon}</div>
              {service.type === "company" && <span className="badge">Empresas</span>}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="price">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
