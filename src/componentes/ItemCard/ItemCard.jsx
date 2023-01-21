import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemCard.css"

const ItemCard = ({ producto }) => {
	return (
		<div key={producto.id} className="card" style={{ width: "18rem" }}>
			<img className="card-img-top card-image" src={producto.img} alt={producto.name} />
			<div className="card-body">
				<h5 className="card-title">{producto.name}</h5>
				<h6>Precio: {producto.price}</h6>
				<Link className="btn btn-primary w-100">Ver mas</Link>
			</div>
		</div>
	)
}

export default ItemCard