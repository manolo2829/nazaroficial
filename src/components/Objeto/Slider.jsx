
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { fbStore } from "../../configfire";
import { useParams } from "react-router";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs"

import "./Slider.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);





const Slider = () => {
  
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [arrayFiles, setArrayFiles] = useState([]);

  const {id} = useParams()

  
  useEffect( () => {

    const ObtenerImagenes = async() =>{
        try{
            const res = await fbStore.collection('Mendoza').doc(id).get()
            const {arrayFiles} = res.data()

            setArrayFiles(arrayFiles)

        }catch(e){
            console.log(e)
        }

    }
    ObtenerImagenes() 
}, []) 
  
  return (
    <div>
        <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
            {
                arrayFiles.map( item => 
                    <SwiperSlide key={arrayFiles.indexOf(item)}><img src={item} alt="" /></SwiperSlide>
                )
            }
            
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
            {
                arrayFiles.map( item =>
                    <SwiperSlide key={item}><img src={item} alt="" /></SwiperSlide>    
                )
            }
            
        </Swiper>
    </div>
  )
}
 
export default Slider