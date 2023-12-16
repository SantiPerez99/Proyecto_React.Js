


const ItemDetail = ({item}) => {

    const { id, name, price, image } = item;

    return (
        
        <div key={id} className="border-black rounded-lg overflow-hidden shadow-xl p-4 w-64 m-4">
            <img src={image} alt={name} className="w-full h-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-600" style={{fontFamily : 'Grafitti, san-serif'}}>{name}</h3>
            <p className="text-gray-600">Precio: ${price}</p>
            <button className="bg-red-400 block w-full text-center py-2 text-white rounded hover:bg-red-500">Agregar al carrito</button>
        </div>

    )


}

export default ItemDetail