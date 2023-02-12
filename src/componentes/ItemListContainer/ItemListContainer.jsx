import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingWidget from "../LoadingWidget/LoadingWidget"
import { getItems, getItemsByCategory } from "../../utils/firebase"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    if (categoryId) {
      getItemsByCategory(categoryId)
        .then(response => {
          setProductos(response)
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }
    else {
      getItems()
        .then(response => {
          setProductos(response)
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }
  }, [categoryId])


  return (
    <div>
      {
        loading ?
          <LoadingWidget />
          :
          <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer