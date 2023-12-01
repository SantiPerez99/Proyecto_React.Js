import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListcontainer from './components/ItemListcontainer/ItemListcontainer'




function App() {
  
  const greetingMensaje = "P r o d u c t o s"

  return (
    <>     
     <Navbar />
     
     <ItemListcontainer greeting={greetingMensaje} />
     
    </>
  )
}

export default App
