import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetalleProducto } from "../Producto/DetalleProducto";

import '../itemlistcontainer/itemlistcontainer.css';
import { getProducto } from "../../assets/firebase";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    getProducto(id).then(prod => {
        setProducto(prod)
    })
}, []);

  // const init = async () => {
  //   const products = await getProducts("../json/productos.json");
  //   const prod = products.find((product) => product.id === parseInt(id));
    
  //   setProducto(prod);
  // };

  // useEffect(() => {
  //   init();
  // }, []);

  return (
    <div className=" card mb-3 container ">
      <DetalleProducto producto={producto} />
      
    </div>
  );
};
