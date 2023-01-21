import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import LoadingWidget from '../LoadingWidget/LoadingWidget'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProduto] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    gFetch(id)
      .then(response => setProduto(response))
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div className='container-detail'>
      {
        loading ?
          <LoadingWidget />
          :
          <ItemDetail producto={producto} />
      }
    </div>
  )
}

export default ItemDetailContainer