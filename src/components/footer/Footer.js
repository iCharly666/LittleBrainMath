import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>LittleBrainMath</h1>
        <p>Morelia Michoacán</p>
      </div>
      <div className="footer-contact">
        <div className="mt-5"><h3>Contáctanos</h3></div>

        <p>Telefono: 4435947088</p>
        <p>Email: utm@utm.com</p>
        <a href="https://github.com/iCharly666/LittleBrainMath">LittleBrainMath</a>
      </div>
      <div className="footer-sns">
        <div className="design-by">Diseñado por Bugisoft</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;