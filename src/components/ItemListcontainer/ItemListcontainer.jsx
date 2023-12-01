import './ItemListcontainer.css'
import Product from '../Productos/product';
//import products from '../Productos/productosData';
import { pedirDatos } from '../utilidades/utilidades';
import { useState } from 'react';
import { useEffect } from 'react';



const ItemListcontainer = () => {

  const [productos, setproductos] = useState([])
  
  useEffect(() => {
    pedirDatos()
      .then((data) => {
        setproductos(data)
      })

  },[])




    return (
      <div className="bg-gray-400 items-list-container ">
        <br />
        <h2 className='text-6xl font-bold text-center text-red-500 shadow-xl border-black' style={{fontFamily: 'Grafitti'}}>Productos</h2>
        <div className="products-list flex flex-wrap justify-center">
          {productos.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default ItemListcontainer

