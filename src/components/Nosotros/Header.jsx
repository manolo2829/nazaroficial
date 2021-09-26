import React from "react";
import "./Header.css";
import coverVideo from "./coverVideo.mp4";
import house from './house.mp4'

const Header = () => {
  return (
    <div className="cover-container">
      <video className="video" src={house} autoPlay loop muted />
      <h1>Nazar Propiedades</h1>
      <p>Inmobiliaria | Mendoza | Liliana Nazar | Argentina </p>
    </div>
  );
};

export default Header;