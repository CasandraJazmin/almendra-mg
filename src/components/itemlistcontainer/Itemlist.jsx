

import { Item } from './item/Item';

export const Itemlist = ({productsList}) => {
  return (
    <>
    
        {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
    </>
);

 };

 