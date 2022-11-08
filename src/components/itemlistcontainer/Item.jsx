
import { Link } from "react-router-dom";
import './itemlistcontainer.css'
export const Item = ({prod}) => {
  return (
  <div className="card cardProducto m-3" key={prod.id}>
    <img src={`./img/${prod.img}`} className="card-img" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{prod.nombre}</h5>
      <p className="card-text">Marca: {prod.marca}</p>
      <p className="card-text">Modelo: {prod.modelo}</p>
      <p className="card-text">Precio: ${prod.precio}</p>
      <p className="card-text">Stock: {prod.stock}</p>
     
    </div>
    <button className='btn btn-dark'><Link className='nav-link' to={`/product/${prod.id}`}>Ver producto</Link></button>
  </div>
  )
};

