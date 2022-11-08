import React from "react";
import './cartwidget.css';
import {Link} from 'react-router-dom';
export const CardWidget = () => {
  return (
    <Link className="nav-link" to="/Carrito">
    <button className="cart-btn"><img src="../../../img/cart.png"  /></button>
    
    </Link>
    
  
  );
};
