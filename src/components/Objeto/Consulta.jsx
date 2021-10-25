import React from 'react'
import './Consulta.css'

const Consulta = () => {
    return (
        <div className='consulta'>
            <h6>Consultar por la pagina</h6> 
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100}}></textarea>
                <label htmlFor="floatingTextarea2">Dejenos cualquier duda sobre este inmueble</label>
            </div>
        </div>
    )
}

export default Consulta
