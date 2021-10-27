import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { fbStore } from '../configfire'
import { fbAuth } from '../configfire'
import './css/Objeto.css'
import Slider from './Objeto/Slider'
import user from './img/nazarvende.jfif'
import Descripcion from './Objeto/Descripcion'
import { useHistory } from 'react-router'
import logo from './img/logocompleto.jfif'
import Consulta from './Objeto/Consulta'

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
                const {tipo, domicilio , precioUSD, zona, localidad, precioPesos, provincia, tasacionPesos, tasacionUSD, descripcion, condicion, barrio, titulo, area, baños, cochera, habitaciones, calefaccion, mascota, pais} = res.data()

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
                setPais(pais)

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
                <h3>{barrio !== 'No' ? `Barrio ${barrio},` : ''} {barrio !== 'No' ? domicilio !== '' ? `${domicilio},` : '' : `Calle ${domicilio},`} {localidad !== '' ? `${localidad}` : ''} </h3>
                <div>
                    <p><b>Tipo:</b> {tipo}</p>
                    <p><b>Condicion:</b> {condicion}</p>
                    <p><b>Pais:</b> {pais}</p>
                    <p><b>Provincia:</b> {provincia}</p>
                    <p><b>Localidad:</b> {localidad}</p>
                    <p><b>Zona:</b> {zona}</p>
                    <p><b>Barrio:</b> {barrio}</p>
                    <p><b>Domicilio:</b> {domicilio}</p>

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
                    {/*<Consulta></Consulta> */}
                    
                    
                    
                </div>
               <div className='objeto-user'>
                   <img src={logo} alt="" />
                   <div className='objeto-user-info'>
                       <div className='objeto-user-data'>
                           <div>
                               <p>Titular:</p>
                               <p>Liliana Nazar</p>
                           </div>
                           <div>
                               <p>Oficina:</p>
                               <p>Turin 2829</p>
                           </div>
                           <div>
                               <p>Propiedades:</p>
                               <p>+300</p>
                           </div>
                       </div>                       
                   </div>
                    
                   <div className='objeto-user-number'>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>2614176778</p>
                    </div>
                   <Consulta></Consulta>
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
