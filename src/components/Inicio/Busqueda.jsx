import React, {useState, useEffect} from 'react'
import { fbStore } from '../../configfire'
import './Busqueda.css'
import fondo from '../img/inicio.jpg'
import { Tipo } from '../hooks/Filtro'
import { Condicion } from '../hooks/Filtro'

const Busqueda = () => {

    const [listaObjetos, setListaObjetos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(0);
    const [search, setSearch] = useState('');
    const [tipo, setTipo] = useState('');
    const [condicion, setCondicion] = useState('');
    const [pais, setPais] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');

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

                    <input type="text" aria-label="Last name" className="form-control"  placeholder='Pais'
                            onChange={(e) => {setPais(e.target.value)}}
                    />
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
                <h4 className='text-center p-5'> Inmuebles </h4>
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
                                    val.titulo.toLowerCase().includes(search.toLocaleLowerCase()) ||
                                    val.condicion.toLowerCase().includes(search.toLocaleLowerCase()) ||
                                    val.tipo.toLowerCase().includes(search.toLocaleLowerCase()) 
                                ){
                                    return val
                                }
                            }).map( item => 
                                <div className="card" key={item.id}>
                                    <img src={item.arrayFiles[0]} className="card-img-top" alt="..." style={{ height: '60%' }}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.localidad}, {item.provincia}</h5>
                                        <p className="card-text">{item.domicilio}, {item.zona}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="card-price">$ARS {item.precioPesos} --- US$ {item.precioUSD}</small>
                                    </div>
                                </div>    
                                
                            )
                        }
                        
                    </div> 
                </div>             
            </div>
        </div>
    )
}

export default Busqueda
