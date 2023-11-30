import products from "./productosData";


const Product = ({ product }) => {
    const { id, name, price, image } = product;
    
  
    return (
      <div key={id} className="border-black rounded-lg overflow-hidden shadow-xl p-4 w-64 m-4">
        <img src={image} alt={name} className="w-full h-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2 text-gray-600" style={{fontFamily : 'Grafitti, san-serif'}}>{name}</h3>
        <p className="text-gray-600">Precio: ${price}</p>
        
      </div>
    );
  };
  
  export default Product;