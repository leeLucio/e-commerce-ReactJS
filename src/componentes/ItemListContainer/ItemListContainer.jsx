import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingWidget from "../LoadingWidget/LoadingWidget"

const ItemListContainer = ({ greeting }) => {
	const [productos, setProductos] = useState([])
	const [loading, setLoading] = useState(false)
	const { id } = useParams()

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			console.log(id)
			setLoading(false)
		}, 1000)
	}, [id])


	return (
		<>
			{
				loading ?
					<LoadingWidget />
					:
					<p>Ya cargo todo </p>
			}
		</>
	)
}

export default ItemListContainer