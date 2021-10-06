import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { fbStore } from '../configfire'
import './css/Objeto.css'

const Objeto = () => {

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
    const [arrayFiles, setArrayFiles] = useState([]);
    const [titulo, setTitulo] = useState('');

    const {id} = useParams()

    useEffect( () => {

        const ticketUnico = async() =>{
            try{
                const res = await fbStore.collection('Mendoza').doc(id).get()
                const {tipo, domicilio , precioUSD, arrayFiles, zona, localidad, precioPesos, provincia, tasacionPesos, tasacionUSD, descripcion, condicion, barrio, titulo} = res.data()

                setTipo(tipo)
                setDomicilio(domicilio)
                setPrecioUSD(precioUSD)
                setArrayFiles(arrayFiles)
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

            }catch(e){
                console.log(e)
            }
    
        }
        ticketUnico() 
    }, [])

    return (
        <div className='objeto'>
            
        </div>
    )
}

export default Objeto
