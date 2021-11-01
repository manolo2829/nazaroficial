import React,{useState} from 'react'
import './Consulta.css'
import Modal from './Modal/Modal'
import styled from 'styled-components';
import logo from '../img/loguitosf.png'
import logoig from '../img/instagram.png'
import logowsp from '../img/whatsapp.png'

const Consulta = () => {
    const [estadoModal, setEstadoModal] = useState(false);

	return (
		<div className='consulta'>
			<ContenedorBotones>
				<p>Si esta interesado en el inmueble <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="transicion-flecha bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg>
                    <b className='transicion-link'
						onClick={ () => setEstadoModal(true) }
					>contactenos</b>
                </p>
			</ContenedorBotones>

            <Modal 
                estado={estadoModal}
                cambiarEstado={setEstadoModal}
            >
                <Contenido>
					<ContenedorRedes>
						<div className='consulta-boton'>
							<a href="https://www.instagram.com/nazar_propiedades/">
								nazar_propiedades
								<img src={logoig} alt="" />
							</a>
							
						</div>
						<div className='consulta-boton'>
							<p>2614176778</p>	
							<img src={logowsp} alt="" />
						</div>
						<div className='consulta-boton'>
							<p>Contactar por la plataforma</p>	
							<img src={logo} alt="" className='consulta-logo' style={{ width: '20%', height: 50 }} />
						</div>
					</ContenedorRedes>					
                    <Boton onClick={() => setEstadoModal(false)}>Aceptar</Boton>
                </Contenido>
                
            </Modal>
		</div>
	);
}
 
export default Consulta;


const ContenedorRedes = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	
	div{
		border-bottom: 2px solid #000;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0;
		max-height: 100px;
		border-radius: 15px;

		&:hover{
			background: rgb(255,251,250);
			background: linear-gradient(90deg, rgba(255,251,250,1) 0%, rgba(189,189,189,1) 100%);
		}
		img{
			width: 80px;
		
		}
		p{
			margin: 0; 
			padding: 0 15px; 
			color: #000;
			font-weight: 500;
		}
		a{
			display:flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			align-items: center;
			margin: 0; 
			padding: 0 15px; 
			color: #000;
			font-weight: 500;
			&:hover{
				text-decoration: none;
			}
		}
	}
`;

const ContenedorBotones = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;

    p{
        text-align: center;
        color: #000;
        font-size: 20px;
        b{
            font-weight: 500;
            color: rgb(187, 0, 0);
            padding: 0 15px;
            text-decoration: underline;
            cursor: pointer;
            &:hover{
                color: rgb(155, 155, 155);
                transition: .5s all;
            }
        }

        svg{
            color: rgb(187,0,0);
        }
    }
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	margin-top: 25px; 
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;