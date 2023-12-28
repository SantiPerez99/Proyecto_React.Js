import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartView = () => {
    const {cart, RemoveItem} = useContext(CartContext)
    const handleRemoveItem = (itemId) => {
        RemoveItem(itemId);
      };
      const totalCompra = cart.reduce((total, item) => {
        return total + (item.price * item.cantidad);
    }, 0);
    return (

        <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
        <div className="grid grid-cols-2 gap-4">
                {cart.map((item) => (
                    <div key={item.id} className="border p-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 mb-2" />
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">Precio: ${item.price}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button className="bg-red-500 text-white px-3 py-1 rounded mt-2 hover:bg-red-600" onClick={() => handleRemoveItem(item.id)}>
                            
                            Eliminar
                        
                        </button>
                    </div>
                ))}
            </div>
        <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total: ${totalCompra.toFixed(2)}</p>
            <button className="bg-green-500 text-white px-5 py-2 rounded mt-4 hover:bg-green-600">Finalizar Compra</button>
        </div>
    </section>

    )
}

export default CartView