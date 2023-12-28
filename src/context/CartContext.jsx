import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart , setCart]  = useState([])

    const addToCart = (item) =>{
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const ClearCart = () => {
        setCart([])
    }

    const ItemsInCart = () =>{
        return cart.reduce((acc, item) => acc + item.cantidad , 0)
    }
    
    const RemoveItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    }

    return(
        
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            ClearCart,
            ItemsInCart,
            RemoveItem
        }}>
            {children}
        </CartContext.Provider>
    )

}