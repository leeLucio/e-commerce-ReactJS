import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import "./CartContainer.css"
import LoadingWidget from "../LoadingWidget/LoadingWidget"
import { useState } from 'react'

const CartContainer = () => {
  const { carrito, vaciarCarrito, obtenerPrecioTotal, eliminarItemCarrito, aumentarItemCarrito } = useCartContext()
  const [isEnviando, setIsEnviando] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    email_confirm: ""
  })

  const handleOnChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const sendOrder = (event) => {
    event.preventDefault()
    setIsEnviando(true)

    const order = {
      buyer: dataForm,
      items: carrito.map(({ id, name, quantity, price }) => ({ id, name, quantity, price })),
      total: obtenerPrecioTotal()
    }

    const db = getFirestore()

    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order)
      .then(({ id }) => {
        console.log(id)
        vaciarCarrito()
      })
      .catch(err => console.error(err))
      .finally(() => setIsEnviando(false))
  }

  if (isEnviando) {
    return (
      <LoadingWidget />
    )
  }

  return (
    <>
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
      {carrito.length ?
        <>
          <h3>Total: ${obtenerPrecioTotal()}</h3>
          <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>

          <form className='formulario' onSubmit={sendOrder}>
            <legend>Complete los datos para enviar la orden de compra</legend>
            <div>
              <input type="text"
                name='name'
                id='name'
                placeholder='Ingrese su nombre'
                value={dataForm.name}
                onChange={handleOnChange}
                required />
            </div>
            <div>
              <input type="tel"
                name='phone'
                id='phone'
                placeholder='Ingrese su numero de telefono'
                value={dataForm.phone}
                onChange={handleOnChange}
                required />
            </div>
            <div>
              <input type="email"
                name='email'
                id='email'
                placeholder='Ingrese su E-mail'
                value={dataForm.email}
                onChange={handleOnChange}
                required />
            </div>
            <div>
              <input type="email"
                name='email_confirm'
                id='email_confirm'
                placeholder='Confirme su E-mail'
                value={dataForm.email_confirm}
                onChange={handleOnChange}
                required />
            </div>
            <button type="submit" className='btn btn-success'>Enviar Order</button>
          </form>
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