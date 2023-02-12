import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { createContext } from 'react'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './componentes/CartContainer/CartContainer'

import './App.css'
const AppContext = createContext()

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        <header className='bg-dark'>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
