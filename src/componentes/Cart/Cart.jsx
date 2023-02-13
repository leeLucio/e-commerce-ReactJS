import { useCartContext } from "../../context/CartContext"
import "./Cart.css"

const Cart = () => {
  const { carrito, eliminarItemCarrito, aumentarItemCarrito } = useCartContext()

  return (
    <div className='cart'>
      {carrito.map(prod =>
        <div className='carritoCard' key={prod.id}>

          <img src={prod.img} alt={prod.name} />

          <h4>{prod.name}</h4>
          <div className='cantidad'>
            <button onClick={() => eliminarItemCarrito(prod, 1)} className='btn btn-outline-secondary'>-</button>
            <div>{prod.quantity}</div>
            <button onClick={() => aumentarItemCarrito(prod, 1)} className='btn btn-outline-secondary'>+</button>
          </div>
          <h4>${prod.quantity * prod.price}</h4>
          <div onClick={() => eliminarItemCarrito(prod, prod.quantity)} className='eliminar' title='Eliminar producto'>🗑</div>
        </div>)}

    </div>
  )
}

export default Cart