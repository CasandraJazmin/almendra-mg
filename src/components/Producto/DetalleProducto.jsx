import {useContext}  from 'react';
import {Link} from 'react-router-dom';
import { ItemCount } from '../itemlistcontainer/ItemCount';
import './DetalleProducto.css';
import { CartContext } from '../../context/CartContext';

export const DetalleProducto = ({producto}) => {
    const {cart, isInCart, addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }
    return (
        <div className=' g-0'>
            
            <div className="col-md-8 ">
            
                <div className="card-body productobody">
                <img src={producto.img} className="img-prod" alt='' />
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text'>Modelo: {producto.modelo}</p>
                    <p className='card-text'>Marca: {producto.marca}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Stock: {producto.stock}</p>
                    <ItemCount stock = {producto.stock} onAdd={onAdd}/> <br />
                    <button className="btn btn-dark"><Link to="/carrito" className="nav-link">Finalizar compra</Link></button>
                   
                </div>
            </div>
        </div>
    );
}
