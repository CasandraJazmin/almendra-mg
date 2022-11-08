import { useState, useEffect } from 'react';
import { Item } from './Item';
import { getProducts } from '../../utils/getProducts';

export const Itemlist = () => {
  const [productos, setProductos] = useState([]);

  const init = async () => {
    const products = await getProducts('./json/productos.json');
    setProductos(products);
  };
  
  useEffect(() => {
    
    init();
  }, []);

  return (
    <>
      {productos.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  );
};