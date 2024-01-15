import './ItemListcontainer.css';
import Product from '../Productos/product';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListcontainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    

    // 1.- Armar una referencia (sync)
    const productosRef = collection(db, 'Productos')
    const docsRef = categoryId
                      ? query( productosRef, where('category', '==', categoryId))
                      : productosRef
    // 2.- LLamar a esa referencia (async)
    getDocs(docsRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
        
        console.log( docs )
        setProductos( docs )
      })
      .finally()

}, [categoryId])

  return (
    <div className="bg-gray-800 items-list-container ">
      <h2 className='text-3xl font-bold text-center text-white shadow-xl border-black' style={{ fontFamily: 'Race' }}>{categoryId}</h2>
      <h2 className='bg-gray-800 p-2 text-3xl font-bold text-center text-white shadow-xl border-black' style={{ fontFamily: 'Race' }}>{greeting}</h2>
      <div className="products-list flex flex-wrap justify-center">
        {productos.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListcontainer;

