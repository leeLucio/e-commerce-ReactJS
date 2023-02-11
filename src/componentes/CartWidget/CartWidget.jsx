import React from 'react'
import { useCartContext } from '../../context/CartContext'
import cartIcon from './../../assets/icono-carrito.png'

function CartWidget() {
  const { obtenerTotalCarrito } = useCartContext()

  return (
    <div className='d-flex align-items-center'>
      <p>{obtenerTotalCarrito()}</p>
      <img src={cartIcon} alt="carrito" />
    </div>
  )
}

export default CartWidget