import { Link } from 'react-router-dom';
import React from 'react';

export const DropDown = () => {
  return (
    <li className='nav-item dropdown'>
      <a
        className='nav-link dropdown-toggle'
        href='#'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Productos
      </a>
      <ul className='dropdown-menu'>
        <li>
          <Link className='nav-link dropdown-item' to='/category/1'>
            Cascada de proteinas
          </Link>
        </li>
        <li>
          <Link className='nav-link dropdown-item' to='/category/2'>
            Shampoo
          </Link>
        </li>
        <li>
          <Link className='nav-link dropdown-item' to='/category/3'>
            Cremas para peinar
          </Link>
        </li>
        <li>
          <Link className='nav-link dropdown-item' to='/category/4'>
            Gel
          </Link>
        </li>
        <li>
          <Link className='nav-link dropdown-item' to='/category/5'>
            Cofias & Colitas
          </Link>
        </li>
      </ul>
    </li>
  );
};
      
