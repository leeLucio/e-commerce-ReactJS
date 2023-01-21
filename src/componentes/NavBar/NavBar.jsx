import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Titulo from "../Titulo/Titulo";
import { NavLink } from "react-router-dom";

import "./NavBar.css"

const NavBar = () => {

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <Titulo titulo="Lucio Commerce" />
      </NavLink>

      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="category/sillas">Sillas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="category/mesas">Mesas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="category/sofas">Sofas</NavLink>
        </li>
      </ul>

      <NavLink to="/carrito"><CartWidget /></NavLink>
    </nav >
  )
}

export default NavBar