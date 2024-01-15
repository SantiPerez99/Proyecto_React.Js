import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { calcularTotalCompra } from '../../context/totalcompra';


const CartView = () => {
    const {cart, RemoveItem} = useContext(CartContext)
    const handleRemoveItem = (itemId) => {
        RemoveItem(itemId);
      };
      const totalCompra = calcularTotalCompra(cart);
    return (

        <section className="bg-gray-800 container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-white"style={{ fontFamily: 'Race, san-serif' }}>Tu Orden</h2>
        <div className="grid grid-cols-2 gap-4">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center p-4">
                        <div className='flex-none mr-4'>
                            <img src={item.image} alt={item.name} className=" mb-2" />
                        </div>
                        <div className="flex-grow flex flex-col">
                            <h3 className="text-white text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-white mb-2">Precio: ${item.price}</p>
                            <p className='text-white mb-2'>Cantidad: {item.cantidad}</p>
                            <button className="bg-red-500 text-white px-3 py-1 rounded mt-2 hover:bg-red-600" onClick={() => handleRemoveItem(item.id)}>
                                
                                Quitar Item
                            
                            </button>
                        </div>                 
                    </div>
                ))}
            </div>
        <div className="mt-8 text-center">
            <p className=" text-white text-xl font-bold">Total: ${totalCompra.toFixed(2)}</p>
            <Link to= "/Checkout">
            <button className="bg-white text-black px-5 py-2 rounded mt-4 hover:bg-red-600">Finalizar Compra</button>
            </Link>
        </div>
    </section>

    )
}

export default CartView