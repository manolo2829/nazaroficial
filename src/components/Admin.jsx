import React,{useState, useRef, useEffect} from 'react'
import './css/Admin.css'
import { fbStorage } from '../configfire';
import { fbStore } from '../configfire';
import Mapa from './Admin/Mapa';
import { useHistory } from 'react-router'




const Admin = () => {

    const [pais, setPais] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [zona, setZona] = useState('');
    const [barrio, setBarrio] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [tipo, setTipo] = useState('');
    const [condicion, setCondicion] = useState('');
    const [precioARS, setPrecioARS] = useState('');
    const [precioUS, setPrecioUS] = useState('');
    const [tasacionARS, setTasacionARS] = useState('');
    const [tasacionUS, setTasacionUS] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [baños, setBaños] = useState('');
    const [habitaciones, setHabitaciones] = useState('');
    const [cochera, setCochera] = useState('');
    const [area, setArea] = useState('');
    const [calefaccion, setCalefaccion] = useState('');
    const [mascota, setMascota] = useState('');
    const [magnitudes, setMagnitudes] = useState([]);
    const [arrayFiles, setArrayFiles] = useState([]);
    const [image, setImage] = useState('');

    const history = useHistory()
    const refInputFile = useRef(null)

    const selectImage = () => {
        refInputFile.current.click()
    }


    const detectFile = (e) => {
        for(let i = 0; i < e.target.files.length; i++){
            const file = e.target.files[i]
            console.log(file)
            uploadFile(file)
        }        

    }
    const uploadFile = async(file) => {
        try {
            const newRef = fbStorage.ref('casas').child(file.name);
            
            await newRef.put(file)
            let urlImage = await newRef.getDownloadURL()
            setImage(urlImage)
            setArrayFiles([...arrayFiles, urlImage])
            console.log(arrayFiles)
        }catch(e){
            console.log(e)
        }
    }


    const uploadProperty = async(e) => {
        e.preventDefault()
        
        try{
            fbStore.collection('Mendoza').add({
                pais: pais,
                provincia: provincia,
                localidad: localidad,
                zona: zona,
                barrio: barrio,
                domicilio: domicilio,
                tipo: tipo,
                condicion: condicion,
                precioPesos: precioARS,
                precioUSD: precioUS,
                tasacionPesos: tasacionARS,
                tasacionUSD: tasacionUS,
                descripcion: descripcion,
                arrayFiles: arrayFiles,
                baños: baños,
                habitaciones: habitaciones,
                cochera: cochera,
                area: area,
                calefaccion: calefaccion,
                mascota: mascota,

            })
        }catch(e){
            console.log(e)
        }

        history.push('/')
    }
  
    


    return (
        <div className='admin'>
            <form className='admin-form container'>
                <div className='admin-form-group'>
                    <div className="form-group">
                        <label htmlFor="pais">Pais</label>
                        <input type="text" className="form-control" id="pais" required
                            onChange={ (e) => {setPais(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="provincia">Provincia</label>
                        <input type="text" className="form-control" id="provincia" required
                            onChange={ (e) => {setProvincia(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="localidad">Localidad</label>
                        <input type="text" className="form-control" id="localidad" required
                            onChange={ (e) => {setLocalidad(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zona">Zona</label>
                        <input type="text" className="form-control" id="zona" 
                            onChange={ (e) => {setZona(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="barrio">Barrio</label>
                        <input type="text" className="form-control" id="barrio" 
                            onChange={ (e) => {setBarrio(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="domicilio">Domicilio</label>
                        <input type="text" className="form-control" id="domicilio" required
                            onChange={ (e) => {setDomicilio(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipo">Tipo</label>
                        <input type="text" className="form-control" id="tipo" required
                            onChange={ (e) => {setTipo(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="condicion">Condicion</label>
                        <input type="text" className="form-control" id="condicion" required
                            onChange={ (e) => {setCondicion(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="precioars">Precio(ARS$)</label>
                        <input type="text" className="form-control" id="precioars" 
                            onChange={ (e) => {setPrecioARS(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preciousd">Precio(US$)</label>
                        <input type="text" className="form-control" id="preciousd" 
                            onChange={ (e) => {setPrecioUS(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tasacionars">Tasacion(ARS$)</label>
                        <input type="text" className="form-control" id="tasacionars" 
                            onChange={ (e) => {setTasacionARS(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tasacionus">Tasacion(US$)</label>
                        <input type="text" className="form-control" id="tasacionus" 
                            onChange={ (e) => {setTasacionUS(e.target.value)}}
                        />
                    </div>
                </div>
                <div>
                    <div className="form-floating">
                        <textarea className="form-control" id="descripcion" style={{ height: 300}}
                            onChange={ (e) => {setDescripcion(e.target.value)}}
                        ></textarea>
                        <label htmlFor="descripcion">Descripcion</label>
                    </div>
                    <div>
                        <ul className='admin-ul-icons'>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-toilet"></i></span>
                                    <input type="text" className="form-control" placeholder="Baños" aria-label="Username" aria-describedby="basic-addon1"
                                        onChange={ (e) => {setBaños(e.target.value)}}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-bed"></i></span>
                                    <input type="text" className="form-control" placeholder="Habitaciones" aria-label="Username" aria-describedby="basic-addon1"
                                        onChange={ (e) => {setHabitaciones(e.target.value)}}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-warehouse"></i></span>
                                    <input type="text" className="form-control" placeholder="Cochera" aria-label="Username" aria-describedby="basic-addon1"
                                        onChange={ (e) => {setCochera(e.target.value)}}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">m2</span>
                                    <input type="text" className="form-control" placeholder="Area" aria-label="Username" aria-describedby="basic-addon1"
                                        onChange={ (e) => {setArea(e.target.value)}}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-thermometer-full"></i></span>
                                    <input type="text" className="form-control" placeholder="Calefaccion" aria-label="Username" aria-describedby="basic-addon1"
                                        onChange={ (e) => {setCalefaccion(e.target.value)}}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-paw"></i></span>
                                    <input type="text" className="form-control" placeholder="Mascotas" aria-label="Username" aria-describedby="basic-addon1"
                                        onChange={ (e) => {setMascota(e.target.value)}}
                                    />
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <input type="file" style={{ display:'none'}} ref={refInputFile} onChange={detectFile} />
                    <div className='admin-container-3'>
                        <div className='admin-file position-relative' onClick={selectImage}>
                            {
                                image === '' ? (
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <p>Select file</p>
                                    </div>
                                ):(
                                    <img src={image}  alt="" />
                                )
                            }
                        </div>

                        <div className='admin-map'>
                            <Mapa></Mapa>
                        </div>

                        
                    </div>
                    <div className='admin-arrayFiles'>
                            {
                                arrayFiles.map( item => 
                                    <img src={item} alt="" key={item} />    
                                )
                            }
                    </div>
                    <div className='admin-submitC'>
                        <input type="submit" className='admin-submit' />
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Admin
