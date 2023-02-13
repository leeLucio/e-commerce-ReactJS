import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import LoadingWidget from "../LoadingWidget/LoadingWidget"
import { useState } from 'react'
import Cart from '../CartList/Cart'
import CartForm from '../CartForm/CartForm'
import Checkout from '../Checkout/Checkout'

const CartContainer = () => {
  const { carrito, vaciarCarrito, obtenerPrecioTotal } = useCartContext()
  const [loading, setLoading] = useState(false)
  const [idOrden, setIdOrden] = useState()

  const cambiarEstadoCarga = (estado) => {
    setLoading(estado)
  }

  const setearIdOrden = (id) =>{
    setIdOrden(id)
  }

  if (loading) {
    return (
      <LoadingWidget />
    )
  }

  if(idOrden){
    return(
      <Checkout idOrden={idOrden}/>
    )
  }

  return (
    <>
      {carrito.length ?
        <>
          <Cart />
          <h3>Total: ${obtenerPrecioTotal()}</h3>
          <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>

          <CartForm setearCarga={cambiarEstadoCarga} setearIdOrden={setearIdOrden}/>
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