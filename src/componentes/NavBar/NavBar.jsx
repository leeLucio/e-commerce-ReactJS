import React from "react";
import Titulo from "../Titulo/Titulo"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {

  return (
    <nav className="navbar">
      <a href="#" className="navbar__brand">
        <Titulo titulo="Lucio Commerce" />
      </a>

      <ul className="navbar__lista">
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      <a href="#"><CartWidget/></a>
    </nav>
  )
}

export default NavBar