import React,{useState} from "react";
import './css/LogIn.css'
import Logo from './img/logo.png'
import { fbAuth } from "../configfire";
import { useHistory } from "react-router";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [error, setError] = useState('');
    const historial = useHistory()

    const LoginUsuario = (e) =>{
        e.preventDefault()
        fbAuth.signInWithEmailAndPassword(email,passWord)
            .then(r => {
                historial.push('/')
            })
            .catch( (err) => {
                console.log(err.code)
                //Le decimos que dentro de la devolucion del codigo nos devuelva el mensaje de error y si e igual a alguno de los if lo guarda en el useState
                if( err.code === 'auth/invalid-email'){
                    setError('Ese email no esta registrado')
                }
                
                if( err.code === 'auth/wrong-password'){
                    setError('La contraseña no es correcta')
                }
            })
    }

    return(
        <div style={{ background: '#EDE9E7'}} className='login'>
            <div className="row content">
                <div className="col-md-6 mb-3">
                    <img src={Logo} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h3 className='singin-text mb-3'>Sing In</h3>
                    <form onSubmit={LoginUsuario}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' className='form-control input-login' 
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' className='form-control input-login' 
                                onChange={(e) => {setPassWord(e.target.value)}}
                            />
                        </div>
                        
                        <button className='btn btn-class' style={{ marginTop: 10 }}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn