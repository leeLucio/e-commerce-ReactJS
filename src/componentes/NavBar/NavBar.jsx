import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Titulo from "../Titulo/Titulo";

import "./NavBar.css"

const NavBar = () => {

  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <Titulo titulo="Lucio Commerce" />
      </a>

      <ul className="nav" style={{ marginRight: "auto" }}>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>

      <a href="#"><CartWidget /></a>
    </nav >
  )
}

export default NavBar