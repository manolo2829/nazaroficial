import React from "react";
import "./Header.css";
import coverVideo from "./coverVideo.mp4";
import house from './house.mp4'

const Header = () => {
  return (
    <div className="cover-container">
      <video className="video" src={house} autoPlay loop muted />
      <h1>Nazar <b className='header-detalle'>Propiedades</b></h1>
      <p>Inmobiliaria <b className='header-detalle'>|</b> Mendoza <b className='header-detalle'>|</b> Liliana Nazar <b className='header-detalle'>|</b> Argentina </p>
    </div>
  );
};

export default Header;