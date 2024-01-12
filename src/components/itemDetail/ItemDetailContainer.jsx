import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc, snapshotEqual } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); 

    const { itemId } = useParams();

    useEffect(() => {
        
        const docRef = doc(db,'Productos',itemId ) 
        getDoc (docRef)
            .then((docSnapshot)=>{
                const doc = {
                    ...docSnapshot.data(),
                    id :docSnapshot.id
                }
                setItem(doc)
            })
            .finally(()=> setLoading(false))
    }, [itemId]); 

    return (
        <div className="bg-gray-400 items-list-container min-h-screen justify-center items-center ">
            {loading ? (
                <p className="text-6xl font-medium text-center text-red-500 shadow-xl border-black'" style={{ fontFamily: 'Grafitti'}}>Cargando...</p>
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