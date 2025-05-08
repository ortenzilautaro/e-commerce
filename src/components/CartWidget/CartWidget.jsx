import React from 'react'
import carrito from '../../assets/carrito-de-compras.png'

function CartWidget() {
  return (
    <div className='carrito'>
      <div className='nro-div'>
        <img src={carrito} alt="Carrito de compras" className='logo-carrito'/>
        <span className='nro-carrito'>4</span>
    </div>
    </div>
  )
}

export default CartWidget