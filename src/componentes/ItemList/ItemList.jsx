import ItemCard from '../ItemCard/ItemCard'


const ItemList = ({ productos }) => {

  return (
    <div className='mt-5 d-flex flex-wrap justify-content-center gap-3'>
      {productos.map(prod =>
        <ItemCard key={prod.id} producto={prod} />
      )}
    </div>

  )
}

export default ItemList