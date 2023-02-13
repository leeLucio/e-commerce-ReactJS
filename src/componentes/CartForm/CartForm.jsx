import { useState } from 'react'
import "./CartForm.css"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from '../../context/CartContext'
import { updateItemStock } from "../../utils/firebase"

const CartForm = ({ setearCarga }) => {
  const { carrito, obtenerPrecioTotal, vaciarCarrito } = useCartContext()
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
    if (dataForm.email !== dataForm.email_confirm) {
      return
    }

    setearCarga(true)

    const order = {
      buyer: dataForm,
      items: carrito.map(({ id, name, quantity, price }) => ({ id, name, quantity, price })),
      total: obtenerPrecioTotal(),
      date: new Date()
    }

    const db = getFirestore()

    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order)
      .then(({ id }) => {
        console.log(id)
        vaciarCarrito()
      })
      .catch(err => console.error(err))
    .finally(() => setearCarga(false))

    carrito.forEach(async (prod) => {
      updateItemStock(prod)
    })
  }

  return (
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
          required
          className={dataForm.email !== dataForm.email_confirm ? "error" : undefined}
        />
        {dataForm.email !== dataForm.email_confirm && <div style={{ color: "red" }}>Los e-mails deben coincidir</div>}
      </div>
      <button type="submit" className='btn btn-success'>Enviar Order</button>
    </form>
  )
}

export default CartForm