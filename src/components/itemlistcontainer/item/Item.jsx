import { Link } from "react-router-dom";
import './Item.css';
export const Item = ({prod}) => {
  return (
  <div className="card cardProducto m-3" key={prod.id}>
    <img src={prod.img} className="card-img"  />
    <div className="card-body">
      <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
      <p className="card-text">Marca: {prod.marca}</p>
      
      <p className="card-text">${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
      
      <button className='btn btn-dark prod-button'><Link className='nav-link' to={`/product/${prod.id}`}>Ver producto</Link></button>
    </div>
  </div>
  )
};
