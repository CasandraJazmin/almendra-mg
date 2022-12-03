import React from "react";
import { FormBusqueda } from "../Formbusqueda/FormBusqueda";
import { DropDown } from "./Dropdown/DropDown";
import { CardWidget } from "../cartwidget/CartWidget";
import {Link} from "react-router-dom";
import './navbar.css';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/almendramcg-da45f.appspot.com/o/almendra-logo.jpg?alt=media&token=cd19a532-1058-41f3-884f-2ddfb7e1680b"
            alt=""
            className="logo-img"
          />
          Almendra MCG
        </a>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className='nav-link' to="/">
              <button className='btn btn-secondary'>Home</button>
          </Link>
            </li>

          
            <DropDown />
          </ul>
          <CardWidget />

          <FormBusqueda busqueda={"Buscar productos"} />
        </div>
      </div>
    </nav>
  );
};

