import React from "react";
import "../styles/Footer.css";



const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 CARONTE. Todos los derechos reservados.</p>
          <p>Hecho por ISPP 2024-2025 G9</p>
          <p>
            <a href="/terms">Términos y condiciones de uso</a> | <a href="/privacy">Política de privacidad</a>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
