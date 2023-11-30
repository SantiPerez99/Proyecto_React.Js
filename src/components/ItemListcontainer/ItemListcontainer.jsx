import './ItemListcontainer.css'
import Product from '../Productos/product';
import products from '../Productos/productosData';

const ItemListcontainer = () => {

    return (
      <div className="bg-gray-400 items-list-container ">
        <br />
        <h2 className='text-6xl font-bold text-center text-red-500 shadow-xl border-black' style={{fontFamily: 'Grafitti'}}>Productos</h2>
        <div className="products-list flex flex-wrap justify-center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default ItemListcontainer

