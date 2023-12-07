import { pedirDatos } from "../utilidades/utilidades"
import { useEffect } from "react"
import { useState } from "react"

const useProductos = () =>{

    const [productos, setproductos] = useState([])
  
  useEffect(() => {
    pedirDatos()
      .then((data) => {
        setproductos(data)
      })

  },[])

  return {
    productos
  }


    
}
export default useProductos