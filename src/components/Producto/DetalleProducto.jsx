import React from 'react';
import '../itemlistcontainer/itemlistcontainer.css';
export const DetalleProducto = ({producto}) => {
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt='' />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text'>Modelo: {producto.modelo}</p>
                    <p className='card-text'>Marca: {producto.marca}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Stock: {producto.stock}</p>
                    <button className="btn btn-dark">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}
