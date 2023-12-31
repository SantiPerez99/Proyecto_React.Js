import { useContext, useState } from "react";
import Boton from "../utilidades/Boton";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const { id, name, price, image } = item;
    const [cantidad, setCantidad] = useState(1) 
    const { addToCart, isInCart } = useContext (CartContext)

    const handelSumar  = () => {
        setCantidad (cantidad + 1)
    }
    const handelRestar = () => {
        if (cantidad > 1) {
          setCantidad(cantidad - 1);
        }
    };
    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }
        

        addToCart(itemToCart)
    }
    return (
        
        <div key={id} className="border-black rounded-lg overflow-hidden shadow-xl p-4 w-64 m-4 ">
            <img src={image} alt={name} className="w-full h-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-600" style={{fontFamily : 'Grafitti, san-serif'}}>{name}</h3>
            <p className="text-gray-600">Precio: ${price}</p>
            <br />
            {
                isInCart( item.id )
                 ?  <Link to="/cart" className="bg-red-400 block w-full text-center py-2 text-white rounded hover:bg-red-500">
                        Finalizar compra
                    </Link>
                 :<>
                 <div className="flex gap-4 items-center">
                     <Boton onClick={handelRestar}>-</Boton>
                     <span>{cantidad}</span>
                     <Boton onClick={handelSumar}>+</Boton>
                 </div>
                 <br />
                 <button onClick={handleAgregar} className="bg-red-400 block w-full text-center py-2 text-white rounded hover:bg-red-500">Agregar al carrito</button>
                 </>
            }
            <Link to="/">
                <button>Volver</button>
            </Link>
                     
        </div>

    )


}

export default ItemDetail