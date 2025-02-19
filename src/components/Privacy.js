import React from "react";
import "../styles/Legal.css";

const Privacy = () => {
  return (
    <section className="legal-section">
      <div className="container">
        <h2>Política de Privacidad</h2>

        <p>
          En CARONTE, valoramos tu privacidad y nos comprometemos a proteger tu información personal. 
          Esta política explica cómo recopilamos, usamos y protegemos tus datos.
        </p>

        <h3>1. Información Recopilada</h3>
        <p>
          Recopilamos información como nombre, correo electrónico y datos de contacto cuando te registras. 
          También podemos recopilar información sobre tu uso de la plataforma.
        </p>

        <h3>2. Uso de la Información</h3>
        <p>
          Utilizamos tus datos para mejorar nuestra plataforma, gestionar los servicios y enviarte notificaciones relevantes.
          No compartimos tu información con terceros sin tu consentimiento.
        </p>

        <h3>3. Seguridad de los Datos</h3>
        <p>
          Implementamos medidas de seguridad para proteger tu información. Sin embargo, ningún sistema es 100% seguro,
          por lo que te recomendamos utilizar contraseñas seguras.
        </p>

        <h3>4. Derechos del Usuario</h3>
        <p>
          Puedes solicitar acceso, modificación o eliminación de tus datos en cualquier momento enviándonos un correo a 
          <a href="mailto:admin@caronte.site"> admin@caronte.site</a>.
        </p>

        <h3>5. Cambios en la Política</h3>
        <p>
          Nos reservamos el derecho de actualizar esta política de privacidad. Si realizamos cambios importantes,
          te lo notificaremos a través de nuestra plataforma.
        </p>

        <p style={{ textAlign: "center" }}>Última actualización: Febrero 2025</p>
      </div>
    </section>
  );
};

export default Privacy;
