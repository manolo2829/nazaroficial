import React from 'react'
import './css/Admin.css'

const Admin = () => {
    return (
        <div className='admin'>
            <form className='admin-form'>
                <div className='admin-form-group'>
                    <div className="form-group">
                        <label htmlFor="validation01">Pais</label>
                        <input type="text" className="form-control" id="validation01" placeholder="First name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Provincia</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Localidad</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Zona</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Barrio</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Domicilio</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Tipo</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Condicion</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Precio(ARS$)</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Precio(US$)</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Tasacion(ARS$)</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validation02">Tasacion(US$)</label>
                        <input type="text" className="form-control" id="validation02" placeholder="City" required/>
                    </div>
                </div>
                <div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 300}}></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                    <div>
                        <ul className='admin-ul-icons'>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-toilet"></i></span>
                                    <input type="text" className="form-control" placeholder="Baños" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-bed"></i></span>
                                    <input type="text" className="form-control" placeholder="Habitaciones" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-warehouse"></i></span>
                                    <input type="text" className="form-control" placeholder="Cochera" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">m2</span>
                                    <input type="text" className="form-control" placeholder="Area" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i class="fas fa-thermometer-full"></i></span>
                                    <input type="text" className="form-control" placeholder="Calefaccion" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Admin
