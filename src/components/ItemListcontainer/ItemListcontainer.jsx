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
    <div className="bg-gray-400 items-list-container ">
      <br />
      <h2 className='text-6xl font-bold text-center text-red-500 shadow-xl border-black' style={{ fontFamily: 'Grafitti' }}>{greeting}</h2>
      <div className="products-list flex flex-wrap justify-center">
        {productos.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListcontainer;

