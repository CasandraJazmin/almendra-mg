import React from "react";

export const DropDown = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Productos
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Acondicionador
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Shampoo
          </a>
        </li>
        <li></li>
        <li>
          <a className="dropdown-item" href="#">
            Cremas para peinar
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Gel
          </a>
        </li>
      </ul>
    </li>
  );
};
