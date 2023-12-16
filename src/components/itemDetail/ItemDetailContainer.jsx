import { useEffect, useState } from "react";
import { pedirDatos } from "../utilidades/utilidades";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); 

    const { itemId } = useParams();

    useEffect(() => {
        pedirDatos()
            .then(data => {
                const selectedItem = data.find(prod => prod.id === Number(itemId));
                setItem(selectedItem);
            })
            .catch(error => {
                
                console.error('Error al cargar los datos:', error);
            })
            .finally(() => setLoading(false)); 
    }, [itemId]); 

    return (
        <div className="bg-gray-400 items-list-container min-h-screen justify-center items-center ">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>  <div className="text-center justify-center">
                        <h2 className='text-6xl font-medium text-center text-red-500 shadow-xl border-black' style={{ fontFamily: 'Grafitti'}}>
                        {item ? item.category : 'Detalles del Item'}
                        </h2>
                        <div className="flex justify-center">
                            <ItemDetail item={item} />
                        </div>               
                    </div>
                    
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;