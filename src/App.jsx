import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './componentes/Titulo/Titulo'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className="App">
      <a href="#" className="navbar__brand">
        <Titulo titulo="Lucio Commerce" />
      </a>
      
      <NavBar />
      <ItemListContainer greeting="Hamburguesa con queso" />
    </div>
  )
}

export default App
