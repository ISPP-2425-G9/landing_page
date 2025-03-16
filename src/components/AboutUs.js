import React, { useEffect } from 'react';
import "../styles/AboutUs.css";

const teamMembers = [
  { name: "Hugo Angulo Borrego", role: "Desarrollador Frontend", image: "/team/hugo.png", hobbies: "Amante de la tecnología y los gatos." },
  { name: "Álvaro Chico Castellano", role: "Desarrollador Frontend y Especialista en Marketing", image: "/team/alvaro.png", hobbies: "Apasionado de la ingeniería software e interesado en la inteligencia artificial." },
  { name: "Rafael Duque Colete", role: "Desarrollador Frontend", image: "/team/rafael.png", hobbies: "Amante del fútbol, el deporte y las buenas series." },
  { name: "Daniel Galván Cancio", role: "Coordinador de Marketing y Desarrollador Frontend", image: "/team/daniel.png", hobbies: "Apasionado de nuevos retos tecnológicos." },
  { name: "Juan García Carballo", role: "Coordinador de Frontend y Desarrollador Full-Stack", image: "/team/juan.png", hobbies: "Amante de los libros y el cine." },
  { name: "Ángel García Escudero", role: "Coordinador GitHub y DevRel", image: "/team/angel.png", hobbies: "Apasionado por la aviación, el deporte y mundo del motorsport." },
  { name: "Andrés Francisco García Rivero", role: "Desarrollador Frontend", image: "/team/andres.png", hobbies: "Apasionado por el motorsport y la electrónica." },
  { name: "David Guillén Fernández", role: "Desarrollador Backend y Especialista en Marketing", image: "/team/david.png", hobbies: "Apasionado del deporte y la programación." },
  { name: "Lucas Manuel Herencia Solís", role: "Desarrollador Backend", image: "/team/lucas.png", hobbies: "Amante de Java." },
  { name: "Jaime Linares Barrera", role: "Coordinador de Frontend y Desarrollador Frontend", image: "/team/jaime.png", hobbies: "Fanático del fútbol y apasionado de la inteligencia artificial." },
  { name: "Jorge Muñoz Rodríguez", role: "Coordinador de Backend y Desarrollador DevOps", image: "/team/jorge.png", hobbies: "Apasionado por la tecnología y los coches." },
  { name: "Alejandro Pérez Santiago", role: "Desarrollador DevOps", image: "/team/alejandro.png", hobbies: "Apasionado por la tecnología, siempre enfocado en la mejora continua y en afrontar nuevos retos." },
  { name: "Javier Rodríguez Reina", role: "Desarrollador Backend", image: "/team/javier.png", hobbies: "Le gusta la literatura y los juegos de estrategia." },
  { name: "Isaac Solís Padilla", role: "Desarrollador Backend", image: "/team/isaac.png", hobbies: "Amante de los videojuegos." },
  { name: "Karim Youssafi Benichikh", role: "Desarrollador Frontend y Especialista en Marketing", image: "/team/karim.png", hobbies: "Amante de la tecnología y la inteligencia artificial." },
];

const AboutUs = () => {
  useEffect(() => {

    setTimeout(() => {
      const mainTitle = document.querySelector('.main-title');
      if (mainTitle) mainTitle.classList.add('fade-in');
    }, 100);

    setTimeout(() => {
      const subtitle = document.querySelector('.subtitle');
      if (subtitle) subtitle.classList.add('fade-in');
    }, 200);

    setTimeout(() => {
      const introText = document.querySelector('.intro-text-container');
      if (introText) introText.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
      const teamIntro = document.querySelector('.team-intro');
      if (teamIntro) teamIntro.classList.add('fade-in');
    }, 800);

    setTimeout(() => {
      const members = document.querySelectorAll('.team-member');
      members.forEach((member, index) => {
        setTimeout(() => {
          member.classList.add('member-fade-in');
        }, 200 * index);
      });
    }, 1000);
  }, []);

  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2 className="main-title">Sobre nosotros</h2>
        <h3 className="subtitle">Conoce al equipo detrás de CARONTE</h3>
        <br></br>
        <div className="intro-text-container">
          <p className="intro">
            <strong>CARONTE</strong> nace como una solución digital innovadora en la <strong>Universidad de Sevilla</strong>, dentro de la asignatura 
            de Ingeniería del Software y Práctica Profesional. Nuestra misión es revolucionar la manera en la que las personas pueden <strong>dejar su legado digital</strong>,
            asegurando que sus últimas palabras y mensajes sean entregados en el momento preciso.
          </p>
          <p className="intro">
            Detrás de <strong>CARONTE</strong> hay un equipo de <strong>15 desarrolladores apasionados</strong> que han trabajado para hacer de esta idea una realidad. 
            Nuestro equipo está especializado en desarrollo full-stack, asegurando que la experiencia del usuario sea fluida y eficiente.  
          </p>
        </div>
        <p className="team-intro" style={{ textAlign: "center" }}>▼ Aquí te presentamos a los miembros que hacen esto posible ▼</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={`${process.env.PUBLIC_URL}${member.image}`} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="hobbies"><strong>Aficiones:</strong> {member.hobbies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
