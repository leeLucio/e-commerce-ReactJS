import React, { createContext, useContext, useState, useEffect } from 'react'

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

	const eliminarItemCarrito = (prod, cantidad) => {
		const index = obtenerIndiceCarrito(prod)

		if (prod.cantidad <= cantidad) {
			carrito.splice(index, 1)
			setCarrito([...carrito])
		} else {
			carrito[index].cantidad -= cantidad
			setCarrito([...carrito])
		}

	}

	const aumentarItemCarrito = (prod, cantidad) => {
		const index = obtenerIndiceCarrito(prod)
		carrito[index].cantidad += cantidad
		setCarrito([...(carrito)])
	}

	return (
		<CartContext.Provider value={{
			carrito,
			agregarCarrito,
			vaciarCarrito,
			obtenerCantTotal,
			obtenerPrecioTotal,
			eliminarItemCarrito,
			aumentarItemCarrito
		}}>
			{children}
		</CartContext.Provider>
	)
}