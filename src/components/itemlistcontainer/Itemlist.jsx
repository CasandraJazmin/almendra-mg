import { useEffect, useState } from 'react';

import { Item } from './Item';
import { getProducts } from '../../utils/getProducts';
import { useParams } from 'react-router-dom';

export const Itemlist = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  const init = async () => {
    if (category) {
      const products = await getProducts('../json/productos.json');
      const productsList = products.filter(
        (prod) => prod.idCategory === parseInt(category)
      );
      setProductos(productsList);
    } else {
      const products = await getProducts('./json/productos.json');
      setProductos(products);
    }
  };

  useEffect(() => {
    init();
  }, [category]);

  return (
    <>
      {productos.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  );
};