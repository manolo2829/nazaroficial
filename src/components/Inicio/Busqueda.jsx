import React from 'react'
import './Busqueda.css'
import fondo from '../img/inicio.jpg'
import { Tipo } from '../hooks/Filtro'
import { Condicion } from '../hooks/Filtro'

const Busqueda = () => {
    return (
        <div className='busqueda-container'>
            <div className='busqueda-all'>
                <div className="input-group">
                    <input type="text" aria-label="First name" className="form-control" style={{ width: '20%' }} placeholder='Tipo' list='lista-tipo' />
                    <datalist id='lista-tipo'>
                        {
                            Tipo.map( item => 
                                <option key={Tipo.indexOf(item)}>{item}</option>    
                            )
                        }
                    </datalist>

                    <input type="text" aria-label="First name" className="form-control" style={{ width: '20%'}} placeholder='Condicion' list='lista-condicion' />
                    <datalist id='lista-condicion'>
                        {
                            Condicion.map( item => 
                                <option key={Condicion.indexOf(item)}>{item}</option>    
                            )
                        }
                    </datalist>                   
                    <input type="text" aria-label="Last name" className="form-control" style={{ width: '20%' }} placeholder='Pais'/>
                    <input type="text" aria-label="Last name" className="form-control" style={{ width: '20%' }} placeholder='Provincia'/>

                </div>
                <div className="input-group" style={{ paddingTop: 10 }}>
                    <input type="text" aria-label="Last name" className="form-control" placeholder='Localidad' style={{ width: '20%' }}/>
                    <input type="text" className="form-control" placeholder="Ubicacion" aria-label="Example text with two button addons" style={{ width: '50%' }}/>

                    <button className='button-search' style={{ color: 'rgb(214, 0, 0)', width: '20%'}}>Buscar</button>
                </div>
            </div>
            <img src={fondo} alt="" className='img-fondo' />
        </div>
    )
}

export default Busqueda
