import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
	const { carrito, vaciarCarrito } = useCartContext()

	return (
		<div>
			{carrito.map(prod =>
				<div key={prod.id}>
					<h3>{prod.name}</h3>
					<h4>{prod.cantidad}</h4>
				</div>)}

			{carrito.length ?
				<button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>
				:
				<h2>El carrito esta vacio</h2>
			}
		</div>
	)
}

export default CartContainer