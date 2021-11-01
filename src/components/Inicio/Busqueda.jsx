import React, {useState, useEffect} from 'react'
import { fbStore } from '../../configfire'
import './Busqueda.css'
import fondo from '../img/inicio.jpg'
import { Tipo } from '../hooks/Filtro'
import { Condicion } from '../hooks/Filtro'
import { Link } from 'react-router-dom'
import Logo from '../img/loguitosf.png'
import Insignia from '../img/logona.png'

//iconos
import iconoM2 from '../img/iconom2.png'
import iconoCochera from '../img/iconoauto.png'
import iconoHabitaciones from '../img/iconohabitaciones.png'
import iconoBaño from '../img/iconobaño.png' 


const Busqueda = () => {

    const [listaObjetos, setListaObjetos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(0);
    const [search, setSearch] = useState('');
    const [tipo, setTipo] = useState('');
    const [condicion, setCondicion] = useState('');
    const [pais, setPais] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [precioDesde, setPrecioDesde] = useState(0);
    const [precioHasta, setPrecioHasta] = useState(0);

    const Filtereditem = () => {

        if(search.length === 0){
            return listaObjetos.slice(paginaActual, paginaActual + 5)
        }

        const filtered = listaObjetos.filter( item =>  item.titulo.includes( search ))

        return filtered.slice( paginaActual, paginaActual + 5)
    }   


    const NextPage = () => {
        if(listaObjetos.filter( item => item.titulo.includes( search )).length > paginaActual + 5)
          setPaginaActual( paginaActual + 5)
    }

    const PrevPage = () => {
        if(paginaActual - 5 >= 0)
          setPaginaActual(paginaActual - 5)
    }

    const OnSearch = ({target}: ChangeEvent<HTMLInputElement>) => {
        setPaginaActual(0)
        setSearch(target.value) 
    }


    useEffect( () => {
        const objetos = async() =>{
          const { docs } = await fbStore.collection('Mendoza').get()
          const nuevoArray = docs.map( item => ({id:item.id, ...item.data()}))
          setListaObjetos(nuevoArray)
             
        }     
        objetos()
        
    }, [])
    return ( 
        <div> 
            <div className='busqueda-container'>

                <div className='busqueda-header'>
                    <h1>NAZAR <b className='header-detalle'>propiedades</b></h1>
                    <p>Inmobiliaria <b className='header-detalle'>|</b> Mendoza <b className='header-detalle'>|</b> Liliana Nazar <b className='header-detalle'>|</b> Argentina </p>
                </div>
                                      
                <div className='busqueda-form'>


                     
                    <input type="text" aria-label="First name" className="form-control"  placeholder='Tipo' list='lista-tipo'
                            onChange={ (e) => {setTipo(e.target.value)}}
                    />
                    <datalist id='lista-tipo'>
                            {
                                Tipo.map( item => 
                                    <option key={Tipo.indexOf(item)}>{item}</option>    
                                )
                            }
                    </datalist>

                    <input type="text" aria-label="First name" className="form-control" placeholder='Condicion' list='lista-condicion' 
                            onChange={(e) => {setCondicion(e.target.value); setPaginaActual(0)}}
                        />
                    <datalist id='lista-condicion'>
                            {
                                Condicion.map( item => 
                                    <option key={Condicion.indexOf(item)}>{item}</option>    
                                )
                            }
                    </datalist>


                    <input type="text" aria-label="Last name" className="form-control" placeholder='Provincia'
                            onChange={(e) => {setProvincia(e.target.value)}}
                    />  
                    <input type="text" aria-label="Last name" className="form-control" placeholder='Localidad' 
                            onChange={(e) => {setLocalidad(e.target.value)}}
                    />
                    <input type="text" className="form-control ubicacion-input" placeholder="Ubicacion" aria-label="Example text with two button addons"
                            
                            onChange={ (e) => {setSearch(e.target.value); setPaginaActual(0)} }
                    />
                </div>

                <img src={fondo} alt="" className='img-fondo' />
            </div>
            <div style={{ background: '#EDE9E7'}} className='cards-container'>
                <div className='cards-header'>
                    <img src={Logo} alt="" /> 
                    <p>Inmuebles</p>
                </div>
                
                <div className='container'>
                    <div className="card-group-grid"> 
                        
                        {
                            listaObjetos.filter( item => item.tipo.includes ( tipo ))
                            .filter( item => item.condicion.includes ( condicion ))
                            .filter( item => item.pais.includes ( pais ))
                            .filter( item => item.provincia.includes ( provincia ))
                            .filter( item => item.localidad.includes ( localidad ))
                            .filter( (val) => {
                                if (search === ''){
                                    return val;
                                } else if (
                                    val.titulo.includes(search) ||
                                    val.condicion.includes(search) ||
                                    val.tipo.includes(search) 
                                ){
                                    return val
                                } 
                            }).map( item => 
                                <Link className='busqueda-link' to={`/objeto/${item.id}`} key={item.id}>
                                    <div className="card" >
                                        
                                        <div className='card-icono-container'>
                                            <div className='card-icono'>
                                                <div>
                                                    <img src={iconoM2} alt="" />
                                                    <img src={iconoCochera} alt="" />
                                                    <img src={iconoHabitaciones} alt="" />
                                                    <img src={iconoBaño} alt="" />
                                                </div>
                                                <div>
                                                    <p>{item.area}</p>
                                                    <p>{item.cochera}</p>
                                                    <p>{item.habitaciones}</p>
                                                    <p>{item.baños}</p>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                        <img src={Insignia} className='card-img-logo' alt="" />
                                        <img src={item.arrayFiles[0]} className="card-img-top" alt="..." style={{ height: '60%' }}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.localidad}, {item.provincia}</h5>
                                            <p className="card-text">{item.domicilio}, {item.zona}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="card-price">$ARS {item.precioPesos} --- US$ {item.precioUSD}</small>
                                        </div>
                                    </div>    
                                </Link>
                            )
                        }
                        
                    </div> 

                </div>             
            </div>
        </div>
    )
}

export default Busqueda
