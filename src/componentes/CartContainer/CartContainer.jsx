import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import LoadingWidget from "../LoadingWidget/LoadingWidget"
import { useState } from 'react'
import Cart from '../CartList/Cart'
import CartForm from '../CartForm/CartForm'

const CartContainer = () => {
  const { carrito, vaciarCarrito, obtenerPrecioTotal } = useCartContext()
  const [loading, setLoading] = useState(false)

  const cambiarEstadoCarga = (estado) =>{
    setLoading(estado)
  }

  if (loading) {
    return (
      <LoadingWidget />
    )
  }

  return (
    <>
      {carrito.length ?
        <>
          <Cart />
          <h3>Total: ${obtenerPrecioTotal()}</h3>
          <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>

          <CartForm setearCarga={cambiarEstadoCarga}/>
        </>
        :
        <>
          <h2>El carrito esta vacio</h2>
          <NavLink to="/"><button className='btn btn-success'>Ir a comprar</button></NavLink>
        </>
      }

    </>
  )
}

export default CartContainer