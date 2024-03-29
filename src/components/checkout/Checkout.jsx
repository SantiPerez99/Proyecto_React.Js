
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { calcularTotalCompra } from '../../context/totalcompra';
import { db } from '../../firebase/config';
import { collection, writeBatch , addDoc, getDoc, updateDoc,doc, documentId, where, getDocs, query, } from 'firebase/firestore'
import Swal from 'sweetalert2';

const Checkout = () => {

    const {cart, ClearCart} = useContext(CartContext)
    const totalCompra = calcularTotalCompra(cart);
    const [values, setValues] = useState({
        Nombre: '',
        Email: '',
        Direccion: ''
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
    };


    const handleSubmit = async (e) => {
        
        e.preventDefault();

        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra,
            fecha: new Date(),
        };
        

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders');
        const productsRef = collection(db , 'Productos')
        const itemsQuery = query(productsRef, where( documentId(), 'in', cart.map(prod => prod.id )))
        const querySnapShot = await getDocs(itemsQuery)
        const outOfStock = []


        querySnapShot.docs.forEach(doc =>{
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock
            
            if(stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
            
        })
        
        if (outOfStock.length === 0){
            batch.commit()
            .then(() =>{
                addDoc(ordersRef,orden).then((doc)=>{
                    setOrderId(doc.id)
                    ClearCart()

                    Swal.fire({
                        icon: 'success',
                        title: '¡Compra finalizada con éxito!',
                        text: `Tu código de compra es: ${doc.id}`
                    }) .then(() => {
                        setTimeout(()=> {
                            window.location.href = '/'
                        },1500);
                    });
                });
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hay items sin stock'
            })
        }

    };    




    return (
        <section className="bg-gray-600">
            <div className=" max-w-3xl mx-auto p-6 bg-gray-200 rounded-lg shadow-lg">
                <h2 className="text-center text-xl"style={{fontFamily: 'Clothing ,sans-serif'}}>INGRESA TUS DATOS PARA GENERAR LA ORDEN DE COMPRA</h2>
                <hr />
                <div className="m-6 grid grid-cols-1 gap-4">
                    <form onSubmit={handleSubmit}>
                        <div className="border-b pb-4">
                            <label htmlFor="nombre" className="text-lg"style={{fontFamily: 'Clothing ,sans-serif'}}>
                                            Nombre:
                            </label>
                            <input 
                            type="text" 
                            id="nombre"  
                            className="block w-full border-gray-300 rounded-md mt-1"
                            onChange={handleInputChange}
                            value={values.Nombre}
                            name="Nombre"
                            />
                        </div>
                        <div className="border-b pb-4">
                            <label htmlFor="email" className="text-lg"style={{fontFamily: 'Clothing ,sans-serif'}}>
                                            Email:
                            </label>
                            <input 
                            type="email" 
                            id="email"  
                            className="block w-full border-gray-300 rounded-md mt-1"
                            onChange={handleInputChange}
                            value={values.Email}
                            name="Email"
                            />
                        </div>
                        <div className="border-b pb-4">
                            <label htmlFor="email" className="text-lg"style={{fontFamily: 'Clothing ,sans-serif'}}>
                                            Direccion de envio:
                            </label>
                            <input 
                            type="text" 
                            id="email"  
                            className="block w-full border-gray-300 rounded-md mt-1"
                            onChange={handleInputChange}
                            value={values.Direccion}
                            name="Direccion"
                            />
                        </div>
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-300">
                                    Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    
    
    )
}

export default Checkout