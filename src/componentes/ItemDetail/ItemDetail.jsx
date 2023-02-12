import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { NavLink } from "react-router-dom"
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  const [isAdded, setIsAdded] = useState(false)

  const { carrito, agregarCarrito } = useCartContext()

  const onAdd = (cant) => {
    agregarCarrito({ ...producto, cantidad: cant })
    setIsAdded(true)
  }

  return (
    <div className="item-detalle">
      <img src={producto.img} alt={producto.name} />
      <div className="item-body">
        <h2>{producto.name}</h2>
        <h4>Categoria: {producto.category}</h4>
        <h4>Precio: ${producto.price}</h4>
        <p>{producto.description}</p>

        {isAdded ?
          <>
            <NavLink to={"/carrito"}><button className="btn btn-dark">Ir al Carrito</button></NavLink>
           <NavLink to={"/"}><button className="btn btn-outline-success">Seguir Comprando</button></NavLink>
          </>
          :
          <ItemCount onAdd={onAdd} />
        }

      </div>
    </div>
  )
}

export default ItemDetail