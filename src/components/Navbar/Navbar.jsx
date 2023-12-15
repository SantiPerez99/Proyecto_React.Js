import './Navbar.css'
import logo from '../../assets/Logo-One-more-stw.jpg'
import NavLinks from './NavLinks'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import DropdownMenu from '../drop.menu/DropdownMenu'


const Navbar = () => {

    return(
        <div className='relative'>
            <CartWidget />
        
            <header className="bg-gray-600">
                
            <div className="container m-auto py-6 flex justify-center items-center">
             <Link to="/">
                <img className='Imagen__Logo' src={logo} alt="Logo" />
             </Link>
            </div>
                
                <div className="container m-auto py-6 flex justify-center items-center">

                    <nav className="flex gap-5" style={{fontFamily: 'Clothing ,sans-serif'}} >
                        <Link 
                        className="text-white text-lg uppercase font-semiBold px-8 hover:text-red-500" to={"/promociones"}>
                            P R O M O C I O N E S
                        </Link> 
                        <DropdownMenu />
                        <Link 
                        className="text-white text-lg uppercase font-semiBold px-8 hover:text-red-500" to={"/contacto"}>
                            C O N T A C T O
                        </Link>  
                    </nav> 

                </div> 

            </header>

        </div>
    )
}

export default Navbar
