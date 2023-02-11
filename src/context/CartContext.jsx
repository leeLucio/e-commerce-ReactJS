import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([])

	const obtenerItemCarrito = (prod) => {
		return carrito.find(el => el.id === prod.id)
	}

	const agregarCarrito = (producto) => {
		const prodCarrito = obtenerItemCarrito(producto)

		prodCarrito ? prodCarrito.cantidad += producto.cantidad : setCarrito([...carrito, producto])
	}

	const vaciarCarrito = () => setCarrito([])

	const obtenerTotalCarrito = () => {
		return carrito.reduce((total, prod) => total + prod.cantidad, 0)
	}

	return (
		<CartContext.Provider value={{ carrito, agregarCarrito, vaciarCarrito, obtenerTotalCarrito}}>
			{children}
		</CartContext.Provider>
	)
}