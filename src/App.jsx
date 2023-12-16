import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListcontainer from './components/ItemListcontainer/ItemListcontainer'
import Promociones from './components/Promociones/promociones'
import Contacto from './components/Contacto/contacto'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetail/itemdetailcontainer'
import Footer from './components/Footer/footer'

function App() {
  
  const greetingMensaje = "P r o d u c t o s"

  return (
    
      <BrowserRouter>
         
        <Navbar />

        <Routes>
            Puedo crear un contenedor donde este la pagina del inicio con el ItemList

            <Route path="/" element={ <ItemListcontainer greeting={greetingMensaje} /> }  />
            <Route path="/remeras/:categoryId" element={<ItemListcontainer />} />
            <Route path="/item/:itemId" element={ <ItemDetailContainer/>} />

            <Route path="/promociones" element={ <Promociones /> }  />
            <Route path="/contacto" element={ <Contacto /> }  />

            <Route path="/not-found" element={ <h1>NOT FOUND</h1> }/> 
            <Route path="*" element={ <Navigate to={"/not-found"}/> }/> 
        </Routes>

        <Footer />
  
      </BrowserRouter>
     
  )
}

export default App
