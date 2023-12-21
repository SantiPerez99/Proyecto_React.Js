



const Boton = ({ onClick, children }) => {
    return (
      <button
        className="bg-gray-600 block w-20 text-center py-1 text-white rounded hover:bg-gray-800 m-1"
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Boton;