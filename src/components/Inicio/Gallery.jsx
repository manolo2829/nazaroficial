import React, {useState, useEffect } from "react";
import { fbStore } from "../../configfire";

const Gallery = () => {
    

    const [paginaActual, setPaginaActual] = useState(0);
    const [search, setSearch] = useState('');
    const [ListaObjetos, setListaObjetos] = useState([]);

    const Filtereditem = () => {
        if( search.length === 0)
            return ListaObjetos.slice(paginaActual, paginaActual+5)
        
        const filtered = ListaObjetos.filter( item => item.titulo.includes( search ))
        return filtered.slice( paginaActual, paginaActual + 5)     
    }


    const NextPage = () => {
        if(ListaObjetos.filter( item => item.titulo.includes( search )).length > paginaActual + 5)
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

    return(
        <div className='m-5'>
            <h1>Listado de usuarios</h1>
            <hr />

            <input type="text" className='mb-5 form-control' placeholder='Buscar Usuario' 
                value={ search }
                onChange={ OnSearch }
            />

            <button className='btn btn-primary' onClick={PrevPage}>Anteriores</button>
            &nbsp;
            <button className='btn btn-primary' onClick={NextPage}>Siguientes</button>

            <table className='table '>
                <thead>
                    <tr>
                        <th className='col'>ID</th>
                        <th className='col'>Nombre</th>
                        <th className='col'>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Filtereditem().map( ({ id, titulo }) => (
                            <tr key={ id }>
                                <th className='row'> { id } </th>
                                <td> { titulo } </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}   

export default Gallery