import React,{useState, useEffect} from 'react'
import { fbStore } from '../../configfire'
import { useParams } from 'react-router';
import './Descripcion.css'


const Descripcion = () => {

    const [descripcion, setDescripcion] = useState([]);
    const {id} = useParams()
    const [num, setNum] = useState(0);


    const ObtenerKey = () => {
        setNum(num+1)
        return num
    }

    useEffect( () => {

        const ticketUnico = async() =>{
            try{
                const res = await fbStore.collection('Mendoza').doc(id).get()
                const {descripcion} = res.data()

                setDescripcion(descripcion.split('|'))
            }catch(e){
                console.log(e)
            }
        }
        ticketUnico()
    },[])
    return (
        <div className='descripcion'>
            <h6>Descripcion</h6>
            {
                descripcion.map( item => 
                    <p key={item}>{item}<br/></p>    
                )
            }
        </div>
    )
}

export default Descripcion
