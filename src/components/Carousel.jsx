import React from 'react';
import {Slideshow, Slide, TextoSlide} from './SliderShow/SliderShow'
import './css/SliderShow.css';
import styled from 'styled-components';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';


const Carousel = () => {
	return (
		<div className='slider-container'>
			

			<Slideshow controles={true}velocidad="3000" intervalo="5000">
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</div>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default Carousel;