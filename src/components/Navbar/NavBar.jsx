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
            src="../../../img/almendra-logo.jpg"
            alt=""
            className="logo-img"
          />
          Almendra MCG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
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

