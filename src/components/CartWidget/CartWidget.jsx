import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div className="absolute bottom-6 right-10 bg-black rounded-full p-2">
      <FaShoppingCart className="text-white text-2xl" />
      <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-1">0</span>
    </div>
  );
};

export default CartWidget 