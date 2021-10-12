import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { fbStore } from '../configfire'
import { fbAuth } from '../configfire'
import './css/Objeto.css'
import Slider from './Objeto/Slider'
import user from './img/nazarvende.jfif'
import Descripcion from './Objeto/Descripcion'
import { useHistory } from 'react-router'

const Objeto = () => {

    const [usuario, setUsuario] = useState(null);
    const [pais, setPais] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [zona, setZona] = useState('');
    const [barrio, setBarrio] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [tipo, setTipo] = useState('');
    const [condicion, setCondicion] = useState('');
    const [precioARS, setPrecioARS] = useState('');
    const [precioUSD, setPrecioUSD] = useState('');
    const [tasacionARS, setTasacionARS] = useState('');
    const [tasacionUSD, setTasacionUSD] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [baños, setBaños] = useState('');
    const [habitaciones, setHabitaciones] = useState('');
    const [cochera, setCochera] = useState('');
    const [area, setArea] = useState('');
    const [calefaccion, setCalefaccion] = useState('');
    const [mascota, setMascota] = useState('');
    const [titulo, setTitulo] = useState('');

    const {id} = useParams()
    const history = useHistory()



    const Eliminar = async() =>{
        try{
            const res = await fbStore.collection('Mendoza').doc(id).delete();
            history.push('/')
        }catch(e){
            console.log(e)
        }
        
    }

    const Modificar = () => {
      history.push(`/admin/${id}`) 
      console.log(history.location.pathname) 
    }

    useEffect( () => {

        const ticketUnico = async() =>{
            try{
                const res = await fbStore.collection('Mendoza').doc(id).get()
                const {tipo, domicilio , precioUSD, zona, localidad, precioPesos, provincia, tasacionPesos, tasacionUSD, descripcion, condicion, barrio, titulo, area, baños, cochera, habitaciones, calefaccion, mascota} = res.data()

                setTipo(tipo)
                setDomicilio(domicilio)
                setPrecioUSD(precioUSD)
                setZona(zona)
                setLocalidad(localidad)
                setPrecioARS(precioPesos)
                setProvincia(provincia)
                setTasacionARS(tasacionPesos)
                setTasacionUSD(tasacionUSD)
                setDescripcion(descripcion)
                setCondicion(condicion)
                setBarrio(barrio)
                setTitulo(titulo)
                setArea(area)
                setBaños(baños)
                setCochera(cochera)
                setHabitaciones(habitaciones)
                setMascota(mascota)
                setCalefaccion(calefaccion)

                fbAuth.onAuthStateChanged( (user) =>{
                    if (user) {
                        setUsuario(user.email)
                        console.log(user.email)
                    }
                })

            }catch(e){
                console.log(e)
            }
    
        }
        ticketUnico() 
    }, [])

    return (
        <div className='objeto'>
            <div className='objeto-header'>
                <h3>{titulo}</h3>
                <div>
                    <p><b>Tipo:</b> {tipo}</p>
                    <p><b>Condicion:</b> {condicion}</p>
                    <p><b>Barrio:</b> {barrio}</p>
                </div>
            </div>
            <div className='objeto-main'>
                <div className='objeto-container'>
                    <div className='objeto-slider'>
                        <Slider></Slider>
                    </div>
                    <div className='objeto-info'>
                        <h5>Informacion de la propiedad</h5>
                        <div>
                            <div>
                                <p>Tipo de construccion</p>
                                <p>{tipo}</p>
                            </div>
                            <div className='objeto-info-2'>
                                <p>Condicion</p>
                                <p>{condicion}</p>
                            </div>
                            <div>
                                <p>Superficie Total m2</p>
                                <p>{area}</p>
                            </div>
                            <div className='objeto-info-2'>
                                <p>Habitaciones</p>
                                <p>{habitaciones}</p>
                            </div>
                            <div>
                                <p>Baños</p>
                                <p>{baños}</p>
                            </div>
                            <div className='objeto-info-2'>
                                <p>Cochera</p>
                                <p>{cochera}</p>
                            </div>
                            <div>
                                <p>Sistema de Calefaccion o Refrigeracion</p>
                                <p>{calefaccion}</p>
                            </div>
                            <div className='objeto-info-2'>
                                <p>Mascotas permitidas</p>
                                <p>{mascota}</p>
                            </div>
                            <div>
                                <p>Sistema de Calefaccion o Refrigeracion</p>
                                <p>{calefaccion}</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <Descripcion></Descripcion>
                    </div>
                </div>
               <div className='objeto-user'>
                   <img src={user} alt="" />
                   <ul>
                       <li><a href="https://www.instagram.com/nazar_propiedades/"><i className="fab fa-instagram"></i></a></li>
                       <li><a href="#!"><i className="far fa-envelope"></i></a></li>
                       <li><a href="#!"><i className="fas fa-phone-alt"></i></a></li>
                   </ul>
                       {
                           usuario === '123@123.com' ? (
                               <div className='objeto-admin'>
                                   <button onClick={Eliminar}>Eliminar</button>
                                   <button onClick={Modificar}>Modificar</button>
                               </div>
                           ):(
                               <span style={{ display: 'none' }}></span>
                           )
                       }
               </div>
               
            </div>
            
        </div>
    )
}

export default Objeto
