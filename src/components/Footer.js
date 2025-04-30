import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section left">
          <a className="icons" href="https://instagram.com/caronte_es/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className="icons" href="https://www.linkedin.com/in/caronte-app/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className="icons" href="https://x.com/CaronteApp" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        </div>

        <div className="footer-section center">
          <p>&copy; 2025 CARONTE. Todos los derechos reservados.</p>
          <p>Realizado por ISPP 2024-2025 G9</p>
          <p>
            <a href="/terms">Términos y condiciones de uso</a>
          </p>
        </div>

        <div className="footer-section right">
          <a className="icons" href="https://www.youtube.com/@CARONTE_ES" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a className="icons" href="https://www.tiktok.com/@caronteapp" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a className="icons" href="https://github.com/ISPP-2425-G9" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
