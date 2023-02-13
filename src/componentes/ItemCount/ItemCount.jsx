import { useState } from 'react'

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  const aumentarCount = () => {
    count < stock && setCount(count + 1)
  }

  const disminuirCount = () => {
    count > 1 && setCount(count - 1)
  }

  const handleOnAdd = () => {
    count <= stock && onAdd(count)
  }

  return (
    <div className="card">
      <div className="card-body row">
        <div className="col">
          <button className=' btn btn-outline-dark w-100' onClick={disminuirCount}>-</button>
        </div>
        <div className="col">
          <p className='w-100'>{count}</p>
        </div>
        <div className="col">
          <button className=' btn btn-outline-dark w-100' onClick={aumentarCount}>+</button>
        </div>
      </div>
      <div className="card-footer">
        <button className='btn btn-outline-dark w-100' onClick={handleOnAdd}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount