import React from "react";
import "../styles/AboutUs.css";

const teamMembers = [
  { name: "Adrián Ramírez Flores", role: "Desarrollador Backend", image: "/team/adrian.png" },
  { name: "Álvar Rodríguez Duarte", role: "Desarrollador Frontend", image: "/team/alvar.png" },
  { name: "Carlos Varela Sault", role: "Desarrollador Frontend", image: "/team/carlos.png" },
];

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <p>Conoce al equipo detrás de CARONTE.</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={`${process.env.PUBLIC_URL}${member.image}`} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
