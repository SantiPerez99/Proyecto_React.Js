


const NavLinks = ({href , text}) =>{


    return(
        <a 
        className="text-white text-lg uppercase font-semiBold px-8 hover:text-red-500" 
        href={href}
        >
            
        {text}
        
        </a>

    );
};
export default NavLinks;