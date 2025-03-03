import React from "react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 CARONTE. Todos los derechos reservados.</p>
        <p>Hecho por ISPP 2024-2025 G9</p>
        <p>
          <a href="/terms">Términos y condiciones de uso</a> | <a href="/privacy">Política de privacidad</a>
        </p>
        <a href="https://instagram.com/caronteapp" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/carronte-app-6b200a354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/CaronteApp" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://www.facebook.com/profile.php?id=61573575124143" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.tiktok.com/@caronteapp" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://github.com/ISPP-2425-G9" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </footer>
  );
};

export default Footer;
