import React from "react";
import "../styles/AboutUs.css";



const teamMembers = [
  { name: "Hugo Angulo Borrego", role: "Desarrollador Full-Stack", image: "/team/hugo.png", hobbies: "Amante del senderismo y la música clásica." },
  { name: "Ángel García Escudero", role: "Desarrollador Full-Stack", image: "/team/angel.png", hobbies: "Apasionado del cine y la inteligencia artificial." },
  { name: "Álvaro Chico Castellano", role: "Desarrollador Full-Stack", image: "/team/alvaro.png", hobbies: "Amante de los animales y la programación competitiva." },
  { name: "Andrés Francisco García Rivero", role: "Desarrollador Full-Stack", image: "/team/andres.png", hobbies: "Jugador de ajedrez y aficionado a la astronomía." },
  { name: "Rafael Duque Colete", role: "Desarrollador Full-Stack", image: "/team/rafael.png", hobbies: "Le encanta el ciclismo y la robótica." },
  { name: "David Guillén Fernández", role: "Desarrollador Full-Stack", image: "/team/david.png", hobbies: "Apasionado del deporte y la programación." },
  { name: "Daniel Galván Cancio", role: "Desarrollador Full-Stack", image: "/team/daniel.png", hobbies: "Apasionado de la fotografía y la tecnología." },
  { name: "Lucas Manuel Herencia Solís", role: "Desarrollador Full-Stack", image: "/team/lucas.png", hobbies: "Aficionado a los coches clásicos y el trekking." },
  { name: "Juan García Carballo", role: "Desarrollador Full-Stack", image: "/team/juan.png", hobbies: "Fan de la música rock y los escape rooms." },
  { name: "Jaime Linares Barrera", role: "Desarrollador Full-Stack", image: "/team/jaime.png", hobbies: "Fanático del fútbol y apasionado de la inteligencia artificial." },
  { name: "Jorge Muñoz Rodríguez", role: "Desarrollador Full-Stack", image: "/team/jorge.png", hobbies: "Le encanta el baloncesto y los drones." },
  { name: "Alejandro Pérez Santiago", role: "Desarrollador Full-Stack", image: "/team/alejandro.png", hobbies: "Aficionado a la escalada y la programación creativa." },
  { name: "Javier Rodríguez Reina", role: "Desarrollador Full-Stack", image: "/team/javier.png", hobbies: "Le gusta la literatura y los juegos de estrategia." },
  { name: "Isaac Solís Padilla", role: "Desarrollador Full-Stack", image: "/team/isaac.png", hobbies: "Fan del automovilismo y los eSports." },
  { name: "Karim Youssafi Benichikh", role: "Desarrollador Full-Stack", image: "/team/karim.png", hobbies: "Interesado en el arte digital y la inteligencia artificial." },
];


const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <h3>Conoce al equipo detrás de CARONTE</h3>
        <br></br>
        <h1>¿Quiénes son los miembros del equipo CARONTE?</h1>
        <p className="intro">
          <strong>CARONTE</strong> nace como una solución digital innovadora en la <strong>Universidad de Sevilla</strong>, dentro de la asignatura 
          de Ingeniería del Software y Práctica Profesional. Nuestra misión es revolucionar la manera en la que las personas pueden <strong>dejar su legado digital</strong>,
          asegurando que sus últimas palabras y mensajes sean entregados en el momento preciso.
        </p>
        <p className="intro">
          Detrás de <strong>CARONTE</strong> hay un equipo de <strong>15 desarrolladores apasionados</strong> que han trabajado para hacer de esta idea una realidad. 
          Nuestro equipo está especializado en desarrollo full-stack, asegurando que la experiencia del usuario sea fluida y eficiente.  
        </p>
        <p style={{ textAlign: "center" }}>👇 Aquí te presentamos a los miembros que hacen esto posible 👇</p>

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
