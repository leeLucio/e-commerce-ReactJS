import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { NavLink } from "react-router-dom"
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  const [isAdded, setIsAdded] = useState(false)

  const { agregarCarrito } = useCartContext()

  const onAdd = (cant) => {
    agregarCarrito({ ...producto, quantity: cant })
    setIsAdded(true)
  }

  return (
    <div className="item-detalle">
      <img src={producto.img} alt={producto.name} />
      <div className="item-body">
        <h2>{producto.name}</h2>
        <h4>Categoria: {producto.category}</h4>
        <h4>Precio: ${producto.price}</h4>
        <h4>Stock: {producto.stock}</h4>
        <p>{producto.description}</p>

        {isAdded ?
          <>
            <NavLink to={"/cart"}><button className="btn btn-dark">Ir al Carrito</button></NavLink>
            <NavLink to={"/"}><button className="btn btn-outline-success">Seguir Comprando</button></NavLink>
          </>
          :
          producto.stock > 0 ?
            <ItemCount onAdd={onAdd} stock={producto.stock} />
            :
            <h3 style={{ color: "red" }}>Sin Stock</h3>
        }

      </div>
    </div>
  )
}

export default ItemDetail