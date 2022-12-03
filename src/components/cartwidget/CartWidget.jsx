import React from "react";
import { useContext } from "react";
import './cartwidget.css';
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';
export const CardWidget = () => {
  const {getItemQuantity} = useContext(CartContext)
  return (
    <>
    <Link className="nav-link" to="/Carrito">
    <button className="cart-btn"><img src="./img/carrito.png" alt="" className="img-cart"/></button>
       { getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}
    
    
    </Link>
    </>
    
  
  );
};
