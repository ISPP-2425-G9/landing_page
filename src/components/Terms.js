import React from "react";
import "../styles/Legal.css";

const Terms = () => {
  return (
    <section className="legal-section">
      <div className="container">
        <h2>Términos y Condiciones de Uso</h2>

        <p>
          Bienvenido a CARONTE. Al acceder y utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones.
          Si no estás de acuerdo con alguna parte de estos términos, no utilices nuestro servicio.
        </p>

        <h3>1. Uso del Servicio</h3>
        <p>
          CARONTE proporciona un sistema para gestionar mensajes y esquelas digitales. No garantizamos la disponibilidad 
          ininterrumpida del servicio y nos reservamos el derecho de modificar o suspender la plataforma en cualquier momento.
        </p>

        <h3>2. Registro y Seguridad</h3>
        <p>
          Para utilizar algunos servicios de CARONTE, debes registrarte y proporcionar información verídica. 
          Eres responsable de mantener la seguridad de tu cuenta y notificar cualquier uso no autorizado.
        </p>

        <h3>3. Contenido y Propiedad Intelectual</h3>
        <p>
          Todo el contenido publicado en CARONTE, incluidos textos, imágenes y código, está protegido por derechos de autor.
          No puedes copiar, distribuir o modificar ningún contenido sin autorización.
        </p>

        <h3>4. Cancelación de Cuenta</h3>
        <p>
          Nos reservamos el derecho de suspender o eliminar cuentas que infrinjan estos términos o realicen actividades sospechosas.
        </p>

        <h3>5. Modificaciones</h3>
        <p>
          Nos reservamos el derecho de actualizar estos términos en cualquier momento. 
          Si continúas utilizando CARONTE después de una actualización, se considerará que aceptas los cambios.
        </p>

        <p style={{ textAlign: "center" }}>Última actualización: Febrero 2025</p>
      </div>
    </section>
  );
};

export default Terms;
