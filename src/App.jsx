import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Hamburguesa con queso" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path='/carrito' element={<ItemListContainer />} />

        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
