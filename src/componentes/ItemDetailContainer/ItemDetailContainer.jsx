import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '../../utils/firebase'
import LoadingWidget from '../LoadingWidget/LoadingWidget'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProduto] = useState({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getSingleItem(id)
      .then(response => setProduto(response))
      .catch(error => setErrorMessage(error))
      .finally(() => setLoading(false))
  }, [id])

  if(errorMessage){
    return(
      <h2>Error: {errorMessage}</h2>
    )
  }

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