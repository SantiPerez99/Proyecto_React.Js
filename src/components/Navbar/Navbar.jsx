import './Navbar.css'
import logo from '../../assets/Logo-One-more.png'
import NavLinks from './NavLinks'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return(
        <div className='relative'>
            <CartWidget />
        
            <header className="bg-gray-600">
                
                <div className="container m-auto py-6 flex justify-center items-center">
                    
                    <img className='Imagen__Logo' src={logo} alt="Logo" />

                </div>
                
                <div className="container m-auto py-6 flex justify-center items-center">
                    
                    <nav className="flex gap-5" style={{fontFamily: 'Clothing ,sans-serif'}} >
                        <NavLinks href={"#"} text={"P R O M O C I O N E S"}/>
                        <NavLinks href={"#"} text={"R E M E R A S"}/>
                        <NavLinks href={"#"} text={"C O N T A C T O"}/>
                    </nav>
                    
                </div>
                
            </header>
        </div>
    )
}

export default Navbar
