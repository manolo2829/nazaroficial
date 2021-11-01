import React from "react";
import "./Header.css";
import house from './house.mp4'

const Header = () => {
  return (
    <div className="cover-container">
      <video className="video" src={house} autoPlay loop muted />
      <h1>NAZAR <b className='header-detalle'>propiedades</b></h1>
      <p>Inmobiliaria <b className='header-detalle'>|</b> Mendoza <b className='header-detalle'>|</b> Liliana Nazar <b className='header-detalle'>|</b> Argentina </p>
      <div></div>
    </div>
  );
};

export default Header; 