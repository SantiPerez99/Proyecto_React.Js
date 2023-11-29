import './ItemListcontainer.css'
import Product from '../Productos/product';
import products from '../Productos/productosData';

const ItemListcontainer = () => {

    return (
      <div className="items-list-container">
        <h2 className='text-4xl font-bold text-center text-red-500 mb-4 mt-8 shadow-md border'>Productos</h2>
        <br />
        <div className="products-list flex flex-wrap justify-center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default ItemListcontainer

