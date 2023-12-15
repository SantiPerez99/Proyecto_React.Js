import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="dropdown">
      <button className="text-white text-lg uppercase font-semiBold px-8 hover:text-red-500" onClick={toggleMenu}>
        R E M E R A S
      </button>
      {showMenu && (
        <div className="dropdown-content">
          <NavLink to="/remeras/black" className="block px-4 py-2 hover:text-red-500">Black</NavLink>
          <NavLink to="/remeras/grey" className="block px-4 py-2 hover:text-red-500">Grey</NavLink>
          <NavLink to="/remeras/gastado" className="block px-4 py-2 hover:text-red-500">Gastado</NavLink>
          <NavLink to="/" className="block px-4 py-2 hover:text-red-500">All</NavLink>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;