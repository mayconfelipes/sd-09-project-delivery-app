import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import style from './navbar.module.scss';

const NavBar = ({ orders, products }) => {
  const userData = JSON.parse(localStorage.getItem('user'));

  const onLoginClick = () => {
    localStorage.removeItem('user');
  };

  const route = products === 'PRODUTOS' ? '/customer/products' : '/seller/orders';
  const testId = products === 'PRODUTOS'
    ? ('customer_products__element-navbar-link-products')
    : ('customer_products__element-navbar-link-orders');

  return (
    <nav className={ style.container }>
      <div
        className={ style.firsGrid }
      >
        <Link className={ style.customerProducts } to={ route }>
          <p data-testid={ testId }>{products}</p>
        </Link>
      </div>
      <div
        className={ style.secondGrid }
      >
        <Link to="/customer/orders" className={ style.customerOrders }>
          <button
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
          >
            {orders}
          </button>
        </Link>
      </div>
      <div
        className={ style.thirdGrid }
      >
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userData && userData.name}
        </p>
      </div>
      <Link className={ style.lastGrid } to="/login">
        <button
          onClick={ onLoginClick }
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
  orders: P.string,
  products: P.string,
};

NavBar.defaultProps = {
  orders: 'MEUS PEDIDOS',
  products: 'PRODUTOS',
};
