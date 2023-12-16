
import React from 'react';

const Contacto = () => {
    return (
       <section className='bg-gray-600'>          
            <div className=" max-w-3xl mx-auto p-6 bg-gray-200 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                <div className="m-6 grid grid-cols-1 gap-4">
                    <form>
                        <div className="border-b pb-4">
                            <label htmlFor="nombre" className="text-lg">
                                Nombre:
                            </label>
                            <input type="text" id="nombre" name="nombre" className="block w-full border-gray-300 rounded-md mt-1" />
                        </div>
                        <div className="border-b pb-4">
                            <label htmlFor="apellido" className="text-lg">
                                Apellido:
                            </label>
                            <input type="text" id="apellido" name="apellido" className="block w-full border-gray-300 rounded-md mt-1" />
                        </div>
                        <div className="border-b pb-4">
                            <label htmlFor="email" className="text-lg">
                                Email:
                            </label>
                            <input type="email" id="email" name="email" className="block w-full border-gray-300 rounded-md mt-1" />
                        </div>
                        <div className="border-b pb-4">
                            <label htmlFor="mensaje" className="text-lg">
                                Mensaje:
                            </label>
                            <textarea id="mensaje" name="mensaje" rows="4" className="block w-full border-gray-300 rounded-md mt-1"></textarea>
                        </div>
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-300">
                        Enviar
                        </button>
                    </form>
                    <div className="border-b pb-4">
                        <p className="text-lg">
                        Correo electrónico:{' '}
                        <a href="mailto:ejemplo@correo.com" className="text-red-500 hover:underline">
                            onemore.stw@gmail.com
                        </a>
                        </p>
                    </div>
                    <div className="border-b pb-4">
                        <p className="text-lg">
                        Teléfono:{' '}
                        <a href="https://wa.me/541134691789/?text= " target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                            11-3469-1789
                        </a>
                        </p>
                    </div>
                    <div className="border-b pb-4">
                        <p className="text-lg">Buenos Aires- Argentina</p>
                    </div>
                </div>
            </div>
      </section> 
    );
  };

export default Contacto;


