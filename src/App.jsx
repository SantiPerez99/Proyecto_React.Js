import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListcontainer from './components/ItemListcontainer/ItemListcontainer'




function App() {
  

  return (
    <>     
     <Navbar />
     
     <ItemListcontainer />
     
    </>
  )
}

export default App
