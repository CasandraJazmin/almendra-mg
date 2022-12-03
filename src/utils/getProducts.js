import { cargarBDD } from "../assets/firebase";
import { getProductos } from "../assets/firebase";
export const getProducts = (ruta) => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const promise = await fetch(ruta);
        // console.log('Esta es promise del fetch', promise);
        const products = await promise.json();
        // console.log('Esta es el products a resolver', products);
  
        resolve(products);
      }, 2000);
    });
  };
  
  // cargarBDD();
  getProductos().then(data => console.log(data))