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
        <div className="bg-gray-400 items-list-container ">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <h2 className='text-6xl font-bold text-center text-red-500 shadow-xl border-black' style={{fontFamily: 'Grafitti'}}>Detalles del Item</h2>
                    <ItemDetail item={item} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;