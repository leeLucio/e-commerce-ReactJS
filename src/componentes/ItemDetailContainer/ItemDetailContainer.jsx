import React from 'react'
import { useParams } from 'react-router-dom'
import LoadingWidget from '../LoadingWidget/LoadingWidget'

const ItemDetailContainer = () => {
  const {id} = useParams()

  return (
    <div>Este es el Item Detail Container del item: {id}</div>
  )
}

export default ItemDetailContainer