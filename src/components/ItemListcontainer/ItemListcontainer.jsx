import './ItemListcontainer.css'
import Product from '../Productos/product';
import useProductos from '../CustomHook/useProductos';  //VER CLASE 08 PARA HACER UN CUSTOMHOOK CON LOS PRODUCTOS
import { useParams } from 'react-router-dom';

const ItemListcontainer = ({ greeting }) => {

  const {categoryId} = useParams()
  const {productos} = useProductos(categoryId)
  

  
  
    return (
      <div className="bg-gray-400 items-list-container ">
        <br />
        
        <h2 className='text-6xl font-bold text-center text-red-500 shadow-xl border-black' style={{fontFamily: 'Grafitti'}}>{greeting}</h2>
        <div className="products-list flex flex-wrap justify-center">
          {productos.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default ItemListcontainer

