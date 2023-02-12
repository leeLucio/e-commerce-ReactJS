import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([])

	const obtenerIndiceCarrito = (prod) => {
		return carrito.findIndex(el => el.id === prod.id)
	}

	const agregarCarrito = (producto) => {
		const indexCarrito = obtenerIndiceCarrito(producto)

		if (indexCarrito >= 0) {
			carrito[indexCarrito].cantidad += producto.cantidad
			setCarrito([...carrito])
		} else {
			setCarrito([...carrito, producto])
		}
	}

	const vaciarCarrito = () => setCarrito([])

	const obtenerCantTotal = () => {
		return carrito.reduce((total, prod) => total + prod.cantidad, 0)
	}

	const obtenerPrecioTotal = () => {
		return carrito.reduce((total, prod) => total + prod.cantidad * prod.price, 0)
	}

	const eliminarItem = () => {

	}

	return (
		<CartContext.Provider value={{ carrito, agregarCarrito, vaciarCarrito, obtenerCantTotal, obtenerPrecioTotal }}>
			{children}
		</CartContext.Provider>
	)
}