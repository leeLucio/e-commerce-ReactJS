import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingWidget from "../LoadingWidget/LoadingWidget"
import { gFetch } from "../../utils/gFetch"
import ItemList from '../ItemList/ItemList'
// import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    gFetch()
      .then(response => {
        setProductos(id ? response.filter(prods => prods.category === id) : response)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])


  return (
    <div>
      {
        loading ?
          <LoadingWidget />
          :
          <ItemList productos={productos}/>
      }
    </div>
  )
}

export default ItemListContainer