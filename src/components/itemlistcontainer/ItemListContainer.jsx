import {useState, useEffect, useContext} from 'react';
import './itemlistcontainer.css';
import { Itemlist } from './Itemlist';
import { getProductos } from '../../assets/firebase';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
  
    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category)).filter(prod => prod.stock > 0)
                const cardProductos = Itemlist({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = Itemlist({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[category]);
  
  return (
      <div className= 'row cardProductos' >
          {productos}
      </div>
     
  );
}

