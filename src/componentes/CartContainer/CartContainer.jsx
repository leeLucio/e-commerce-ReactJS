import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

import "./CartContainer.css"

const CartContainer = () => {
	const { carrito, vaciarCarrito, obtenerPrecioTotal } = useCartContext()

	return (
		<div>
			{carrito.map(prod =>
				<div className='carritoCard' key={prod.id}>
					<img src={prod.img} alt={prod.name} />
					<h4>{prod.name}</h4>
					<div className='cantidad'>
						<button className='btn btn-outline-secondary'>-</button>
						<div>{prod.cantidad}</div>
						<button className='btn btn-outline-secondary'>+</button>
					</div>
					<h4>{prod.cantidad * prod.price}</h4>
				</div>)}

			{carrito.length ?
				<>
					<h3>Total: {obtenerPrecioTotal()}</h3>
					<button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>
				</>
				:
				<>
					<h2>El carrito esta vacio</h2>
					<NavLink to="/"><button className='btn btn-success'>Ir a comprar</button></NavLink>
				</>
			}
		</div>
	)
}

export default CartContainer