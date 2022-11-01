import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Gerónimo Agustín Medina</h1>
        <p>Based in Cordoba, Argentina</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design by Gerónimo Agustín Medina</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/geronimo-medina-994414154/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://twitter.com/geromediina"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/geromediina/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
