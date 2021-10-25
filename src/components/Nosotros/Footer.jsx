import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>NAZAR <b className='footer-detalle'>propiedades</b></h1>
        <p>______________</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>liliananazar@gmail.com</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">web developer manudiez2003@gmail.com</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram iconsSocial"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter iconsSocial"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp iconsSocial"></i>
          </a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;