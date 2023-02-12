import { useCartContext } from '../../context/CartContext'
import cartIcon from './../../assets/icono-carrito.png'
import "./CartWidget.css"

function CartWidget() {
  const { obtenerCantTotal } = useCartContext()

  return (
    <div className='cartwidget d-flex align-items-center'>
      <p className='cantidad'>{obtenerCantTotal()}</p>
      <img src={cartIcon} alt="carrito" />
    </div>
  )
}

export default CartWidget