import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div className="absolute bottom-6 right-10 bg-gray-700 rounded-full p-2">
      <FaShoppingCart className="text-white text-2xl" />
      <span className="bg-red-500 rounded-full text-white w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">0</span>
    </div>
  );
};

export default CartWidget 