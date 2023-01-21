import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  const onAdd = (cant) => {
    console.log(cant)
  }


  return (
    <div className="item-detalle">
      <img src={producto.img} alt={producto.name} />
      <div className="item-body">
        <h2>{producto.name}</h2>
        <h4>Categoria: {producto.category}</h4>
        <h4>Precio: ${producto.price}</h4>
        <p>{producto.description}</p>

        <ItemCount onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default ItemDetail