import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p>Si tienes dudas o necesitas más información, contáctanos.</p>
        <button onClick={() => alert('Envíanos un mensaje a contacto@caronte.com')}>Escríbenos</button>
      </div>
    </section>
  );
};

export default Contact;
