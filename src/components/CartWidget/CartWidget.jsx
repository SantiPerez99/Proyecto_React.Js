import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { ItemsInCart } = useContext(CartContext)
  return (
    <Link to="/cart" className="absolute bottom-6 right-10 bg-gray-700 rounded-full p-2 cursor-pointer">
      <FaShoppingCart className="text-white text-2xl" />
      <span className="bg-red-500 rounded-full text-white w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">{ ItemsInCart() }</span>
    </Link>
  );
};

export default CartWidget 