import { createContext, useContext, useState, useEffect } from 'react'

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
      if (carrito[indexCarrito].quantity + producto.quantity >= producto.stock) {
        return
      }
      carrito[indexCarrito].quantity += producto.quantity
      setCarrito([...carrito])
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const vaciarCarrito = () => setCarrito([])

  const obtenerCantTotal = () => {
    return carrito.reduce((total, prod) => total + prod.quantity, 0)
  }

  const obtenerPrecioTotal = () => {
    return carrito.reduce((total, prod) => total + prod.quantity * prod.price, 0)
  }

  const eliminarItemCarrito = (prod, quantity) => {
    const index = obtenerIndiceCarrito(prod)

    if (prod.quantity <= quantity) {
      carrito.splice(index, 1)
      setCarrito([...carrito])
    } else {
      carrito[index].quantity -= quantity
      setCarrito([...carrito])
    }

  }

  const aumentarItemCarrito = (prod, quantity) => {
    const index = obtenerIndiceCarrito(prod)
    if (carrito[index].quantity >= prod.stock) {
      return
    }

    carrito[index].quantity += quantity
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