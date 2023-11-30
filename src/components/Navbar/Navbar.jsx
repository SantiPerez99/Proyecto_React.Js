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
                    
                    <nav className="flex gap-5">
                        <NavLinks href={"#"} text={"PROMOCIONES"}/>
                        <NavLinks href={"#"} text={"REMERAS"}/>
                        <NavLinks href={"#"} text={"CONTACTO"}/>
                    </nav>
                    
                </div>
                
            </header>
        </div>
    )
}

export default Navbar
// terminar de ver after clas 1.01 