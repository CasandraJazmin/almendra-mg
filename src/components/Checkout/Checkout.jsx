import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createOrdenCompra,
  getProducto,
  updateProducto,
} from "../../assets/firebase";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext";

export const Checkout = () => {
  const datosFormulario = React.useRef();
  let navigate = useNavigate();
  const { cart, emptyCart, totalPrice } = useContext(CartContext);

  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const consultarFormulario = (e) => {
    e.preventDefault();
    console.log(email, email2);
    if (email !== email2) {
      toast.error("La confirmacion de email es incorrecta");
      return;
    }
    const datForm = new FormData(datosFormulario.current);
    const userData = Object.fromEntries(datForm);
    const aux = [...cart];
    aux.forEach((producto) => {
      getProducto(producto.id).then((prod) => {
        prod.stock -= producto.cant;
        updateProducto(producto.id, prod);
      });
    });

    createOrdenCompra({
      ...userData,
      preTotal: totalPrice(),
      fecha: new Date().toISOString().slice(0, 10),
      productos: cart,
    })
      .then((orden) => {
        toast.success(`Su orden ${orden.id} fue creada con éxito`);
        emptyCart();
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Su orden no fue creada con éxito`);
        console.error(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input type="text" className="form-control" name="apellido" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmar-email" className="form-label">
            Confirmar Email
          </label>
          <input
            type="email"
            className="form-control"
            name="confirmar-email"
            value={email2}
            onChange={(event) => setEmail2(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dni" className="form-label">
            DNI
          </label>
          <input type="number" className="form-control" name="dni" />
        </div>
        <div className="mb-3">
          <label htmlFor="celular" className="form-label">
            Numero telefonico
          </label>
          <input type="number" className="form-control" name="celular" />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección
          </label>
          <input type="text" className="form-control" name="direccion" />
        </div>

        <button type="submit" className="btn btn-primary">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};
