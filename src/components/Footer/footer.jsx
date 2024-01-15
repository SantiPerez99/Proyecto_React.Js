import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2023 One-More. Todos los derechos reservados.</p>

        <div className="mt-2 flex justify-center">
        <a href="https://www.instagram.com/onemore.stw/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61554256903531" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
      </footer>
    );
  };
  
  export default Footer;
