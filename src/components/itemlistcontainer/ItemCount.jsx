import {useState} from 'react';
import "./ItemCount.css";

export const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) 
    
    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            
                    
            <button onClick={incrementar} className='btn contadorbutton  btn-light botItem'>+<i class="fas fa-plus"></i></button>
            {contador}
            <button onClick={decrementar} className='btn contadorbutton btn-light botItem'>-<i class="fas fa-minus"></i></button>
            <button className="btn btn-info" onClick={agregarAlCarrito}>Añadir al carrito<i class="fas fa-cart-plus"></i></button>
        </>
    );
}

