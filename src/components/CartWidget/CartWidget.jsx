import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () =>{

  return(
      <div className="flex">
        <FaShoppingCart />
        <p> 0  </p>
        
      </div>
    
  )
}

export default CartWidget 