import {useState} from 'react';
import "./ItemCount.css";

export const ItemCount = () => {
    const [contador, setContador] = useState(1) 

    const modificarContador = (operacion) => {
        if(operacion === "+") {
            if(contador < 10) 
                setContador(contador + 1)
        } else {
            if(contador > 1)
                setContador(contador - 1)
        }
    }
    return (
        <>
            <button onClick={() => modificarContador("+")} className='btncount btn-light'>+</button>
                {contador}
            <button onClick={() => modificarContador("-")} className='btncount btn-light'>-</button>
        </>
    );
}

