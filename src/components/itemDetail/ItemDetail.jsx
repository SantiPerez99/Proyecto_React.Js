import { useContext, useState } from "react";
import Boton from "../utilidades/Boton";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const ItemDetail = ({ item }) => {
  const { id, name, price, image } = item;
  const [cantidad, setCantidad] = useState(1);
  const { addToCart, isInCart } = useContext(CartContext);
  const [hovered, setHovered] = useState(false);


  const handelSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handelRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    };

    addToCart(itemToCart);
  };

  return (
    <div className="flex border-black rounded-lg overflow-hidden shadow-xl p-4 m-4">
      <div className="flex-shrink-0 w-1/2">
        <img src={image} alt={name} className="w-full h-auto mb-4" />
      </div>
      <div className="flex flex-col justify-center  ml-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: 'Race, san-serif' }}>
            {name}
          </h3>
          <p className="text-white">Precio: ${price}</p>
        </div>
        <br />
        <div>
          {isInCart(item.id) ? (
            <Link to="/cart" className="bg-red-400 block w-full text-center py-2 text-white rounded hover:bg-red-500">
              Finalizar compra
            </Link>
          ) : (
            <>
              <div className="flex gap-4 justify-center items-center">
                <Boton onClick={handelRestar}>-</Boton>
                <span className="text-white">{cantidad}</span>
                <Boton onClick={handelSumar}>+</Boton>
              </div>
              <br />
              <button onClick={handleAgregar} className="bg-red-600 block w-full text-center py-2 text-white rounded hover:bg-red-500">
                Agregar al carrito
              </button>
            </>
          )}
          <br />
          <Link to="/">
            <button className="bg-gray-800 block w-full text-center py-2 text-white rounded hover:bg-gray-600">Volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
