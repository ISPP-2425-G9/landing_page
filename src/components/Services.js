import React from "react";
import "../styles/Services.css";
import { FaCalendarCheck, FaBusinessTime, FaRegAddressBook } from "react-icons/fa"; 



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
    description: "Publicita tu empresa relacionada con el sector funerario (funeraria, notaria, floristería, etc.) para que más clientes puedan conocer tus servicios.",
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
        <h3>Ofrecemos una plataforma segura para gestionar tu legado digital y comunicación post-mortem.</h3>

        <div className="service-grid">
          {servicesData.map((service, index) => (
            <div className={`service ${service.type}`} key={index}>
              <div className="icon">{service.icon}</div>
              {service.type === "company" && <span className="badge">Empresas</span>}
              <h3>{service.title}</h3>
              <p style={{ textAlign: "center" }}>{service.description}</p>
              <p className="price">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
