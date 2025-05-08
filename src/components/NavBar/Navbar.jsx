import React from 'react';
import '../../styles/navbar.css';
import CartWidget from '../CartWidget/CartWidget'
import LogoPanaderia from '../../assets/logo-panaderia.png'

function Navbar() {
    return (
            <nav className='navbar'>
                <img src={LogoPanaderia} alt="Panaderia" className='logo-panaderia'/>
                <div className='nav'>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Producto</a></li>
                    <li><a href="#">Contactos</a></li>
                </ul>
                <CartWidget />
                </div>
            </nav>
    )
}

export default Navbar