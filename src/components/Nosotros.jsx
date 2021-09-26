import React from "react";
import Carousel from './Carousel'
import './css/Nosotros.css'
import Header from "./Nosotros/Header";
import About from "./Nosotros/About";
import Info from "./Nosotros/Info";
import Footer from "./Nosotros/Footer";

const Nosotros = () => {
    return(
        <div>
            <Header></Header>  
            <About></About>
            <Info></Info>
            <Footer></Footer>
        </div>    
    )
}

export default Nosotros