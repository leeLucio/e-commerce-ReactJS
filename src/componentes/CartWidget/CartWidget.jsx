import React from 'react'
import { useCartContext } from '../../context/CartContext'
import cartIcon from './../../assets/icono-carrito.png'

function CartWidget() {
  const { obtenerCantTotal } = useCartContext()

  return (
    <div className='d-flex align-items-center'>
      <p>{obtenerCantTotal()}</p>
      <img src={cartIcon} alt="carrito" />
    </div>
  )
}

export default CartWidget