import React from "react";
import "./App.css";


const Header = () => {
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/caronte_gris.svg`} alt="Logo de Caronte" className="logo" />
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#precios">Planes</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Inicio = () => {
  return (
    <section id="inicio">
      <h2>Gestiona tu despedida digital</h2>
      <p>Planifica tus mensajes finales y esquelas personalizadas para que sean enviadas en el momento adecuado.</p>
      <button onClick={() => scrollToSection('caracteristicas')}>Descubre más</button>
    </section>
  );
};

const Caracteristicas = () => {
  return (
    <section id="caracteristicas">
      <h2>Características principales</h2>
      <div className="features">
        <div className="feature">
          <h3>Mensajes personalizados</h3>
          <p>Crea y programa mensajes que serán enviados tras tu fallecimiento.</p>
        </div>
        <div className="feature">
          <h3>Esquelas digitales</h3>
          <p>Diseña esquelas digitales y decide quién las recibirá.</p>
        </div>
        <div className="feature">
          <h3>Validación Segura</h3>
          <p>Confirmación de fallecimiento mediante certificados oficiales.</p>
        </div>
      </div>
    </section>
  );
};

const Planes = () => {
  return (
    <section id="precios">
      <h2>Planes de Suscripción</h2>
      <div className="pricing">
        <div className="plan">
          <h3>Plan Básico</h3>
          <p>1,99€ por esquela</p>
          <ul>
            <li>Creación de esquelas</li>
            <li>Personalización básica</li>
            <li>Envío por email</li>
          </ul>
          <button>Elegir Plan</button>
        </div>
        <div className="plan destacado">
          <h3>Plan Premium</h3>
          <p>0,99€/mes</p>
          <ul>
            <li>Mensajes programados</li>
            <li>Personalización avanzada</li>
            <li>Envío por email y SMS</li>
          </ul>
          <button>Elegir Plan</button>
        </div>
        <div className="plan">
          <h3>Cuenta Empresa</h3>
          <p>9,99€/mes</p>
          <ul>
            <li>Publica servicios</li>
            <li>Mayor visibilidad</li>
            <li>Soporte prioritario</li>
          </ul>
          <button>Elegir Plan</button>
        </div>
      </div>
    </section>
  );
};

const Contacto = () => {
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <p>Si tienes dudas o necesitas más información, contáctanos.</p>
      <button onClick={() => alert('Envíanos un mensaje a contacto@caronte.com')}>Escríbenos</button>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Caronte. Todos los derechos reservados.</p>
    </footer>
  );
};

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <Caracteristicas />
      <Planes />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
