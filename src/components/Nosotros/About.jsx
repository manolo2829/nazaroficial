import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>¿Quienes somos?</h3>
        <p>
            Somos una empresa líder dedicada al sector inmobiliario en la ciudad de Mendoza y el mercado internacional.
        </p>
        <h4>Nuestra vision</h4>
        <p>Ser un referente en el sector de bienes raíces en Argentina, construyendo lazos de confianza, seguridad y bienestar con nuestros clientes y educando oportunamente en lo relacionado a temas inmobiliarios.</p>
        <h4>Nuestra mision</h4>
        <p>Lograr que las necesidades inmobiliarias de nuestros clientes resulten productivas, y que todas sus negociaciones se den en un ambiente ético, profesional y con un excelente servicio diferenciado.</p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;