import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css"

const NavBar = () => {

  return (
    <nav className="navbar">
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