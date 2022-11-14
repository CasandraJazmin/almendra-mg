import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetalleProducto } from "../Producto/DetalleProducto";
import { getProducts } from "../../utils/getProducts";
import '../itemlistcontainer/itemlistcontainer.css';
import { ItemCount } from "../itemlistcontainer/ItemCount";
export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  const init = async () => {
    const products = await getProducts("../json/productos.json");
    const prod = products.find((product) => product.id === parseInt(id));
    console.log(prod);
    setProducto(prod);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className=" card mb-3 container ">
      {producto && <DetalleProducto producto={producto} />}
      
    </div>
  );
};
