import './Navbar.css'
import logo from '../../assets/Logo-One-More-stw.png'
import NavLinks from './NavLinks'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import DropdownMenu from '../drop.menu/DropdownMenu'
import fondo from '../../assets/fondo.jpg'

const Navbar = () => {

    const containerStyle = {
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",  // Ajusta la altura según tus necesidades
        width: "100%",   // Ajusta el ancho según tus necesidades
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      };

    return(
        <div className='relative'>
            <CartWidget />
        
            <header className="bg-gray-600">    
                <div className="bg-gray-800 container m-auto py-6 flex justify-between items-center">

                    <nav className="flex gap-5" style={{fontFamily: 'Clothing ,sans-serif'}} >
                        <DropdownMenu />   
                    </nav>
                    
                    <div className="text-white text-lg uppercase font-semiBold px-8"style={{fontFamily: 'Race'}}>
                        One More Streetwear ™
                    </div>
                    
                    <Link 
                        className="text-white text-lg uppercase font-semiBold px-8 hover:text-red-500" to={"/contacto"}>
                            C O N T A C T O
                    </Link>  

                </div> 
                <div style={containerStyle} className="container m-auto flex justify-center items-center">
                    <Link to="/">
                        <img className='Imagen__Logo' src={logo} alt="Logo" />
                    </Link>
                </div>
            </header>

        </div>
    )
}

export default Navbar
