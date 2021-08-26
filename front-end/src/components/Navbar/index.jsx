import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import style from './navbar.module.scss';

const NavBar = ({ orders = 'MEUS PEDIDOS', products = 'PRODUTOS' }) => {
  const route = products === 'PRODUTOS' ? '/customer/products' : '/seller/orders';
  return (
    <nav className={ style.container }>
      <div
        data-testid="customer_products__element-navbar-link-products"
        className={ style.firsGrid }
      >
        <Link className={ style.customerProducts } to={ route }>
          <p>{products}</p>
        </Link>
      </div>
      <div
        data-testid="customer_products__element-navbar-link-orders"
        className={ style.secondGrid }
      >
        <Link to="/customer/orders" className={ style.customerOrders }>
          <button type="button">{orders}</button>
        </Link>
      </div>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
        className={ style.thirdGrid }
      >
        <p>Nome da pessoa usuária</p>
      </div>
      <Link className={ style.lastGrid } to="/login">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  orders: P.string.isRequired,
  products: P.string.isRequired,
};
