import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css'
import Logo from './img/logo.png'
import { fbAuth } from '../configfire';

function Menu() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [usuario, setUsuario] = useState('');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect( () => {
    fbAuth.onAuthStateChanged( (user) =>{
        if (user) {
            setUsuario(user.email)
            console.log(user.email)
        }
    })
  }, [])

  return (
    <>
      <nav className='navbar fixed-top'>
        <img src={Logo} alt="" className='navbar-logo2 img-logo'/>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/nosotros'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Nosotros
            </Link>
          </li>
          <li className='nav-item'>
            {
              usuario === '123@123.com' ?
              (
                <Link
                  to='/admin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link>
              ):(
                <Link
                  to='/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  SingIn
                </Link>
              )
            }
            
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Menu;