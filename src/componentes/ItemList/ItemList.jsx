import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ItemCard from '../ItemCard/ItemCard'


const ItemList = ({ productos }) => {

  return (
    <div className='mt-5 d-flex flex-wrap justify-content-center gap-3'>
      {productos.map(prod =>
        <ItemCard producto={prod} />
      )}
    </div>

  )
}

export default ItemList