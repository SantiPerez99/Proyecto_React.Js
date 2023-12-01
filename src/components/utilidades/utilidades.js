import products from "../Productos/productosData"


export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() =>[
            resolve(products)

        ],2000)        

    })        
}