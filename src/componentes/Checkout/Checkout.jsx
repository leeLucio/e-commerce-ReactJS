import { NavLink } from "react-router-dom"

const Checkout = ({ idOrden }) => {
  return (
    <div>
      <h2>La compra ha finalizado con éxito</h2>
      <h3>La ID de su compra es: {idOrden}</h3>
      <NavLink to="/"><button className='btn btn-success'>Volver al inicio</button></NavLink>
    </div>
  )
}

export default Checkout