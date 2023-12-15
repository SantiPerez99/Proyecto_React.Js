import products from "../Productos/productsData"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() =>[
            resolve(products)

        ],1000)        

    })        
}