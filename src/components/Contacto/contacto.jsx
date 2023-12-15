
import React from 'react';

const Contacto = () => {
    return (
       <section className='bg-gray-600'>          
            <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                <div className="grid grid-cols-1 gap-4">
                <div className="border-b pb-4">
                    <p className="text-lg">
                    Correo electrónico:{' '}
                    <a href="mailto:ejemplo@correo.com" className="text-blue-500 hover:underline">
                        ejemplo@correo.com
                    </a>
                    </p>
                </div>
                <div className="border-b pb-4">
                    <p className="text-lg">
                    Teléfono:{' '}
                    <a href="tel:1234567890" className="text-blue-500 hover:underline">
                        123-456-7890
                    </a>
                    </p>
                </div>
                <div className="border-b pb-4">
                    <p className="text-lg">Dirección: Calle Ejemplo, Ciudad, País</p>
                </div>
                </div>
            </div>
      </section> 
    );
  };

export default Contacto;


