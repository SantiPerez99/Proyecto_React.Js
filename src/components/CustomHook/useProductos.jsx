import { pedirDatos } from "../utilidades/utilidades"
import { useEffect } from "react"
import { useState } from "react"

const useProductos = (categoryId) =>{

    const [productos, setproductos] = useState([])
  
  useEffect(() => {
    pedirDatos()
      .then((data) => {
        const items = categoryId 
        ? data.filter(prod => prod.category === categoryId)
        : data
        setproductos(items)
      })

  },[categoryId])

  return {
    productos
  }


    
}
export default useProductos