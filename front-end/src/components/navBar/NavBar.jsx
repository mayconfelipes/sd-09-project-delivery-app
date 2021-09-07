import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './navBar.style';

export default function NavBar() {
  const userInfos = JSON.parse(localStorage.getItem('user'));

  const classes = useStyle();

  return (
    <div className={ classes.root }>
      <div
        className={ classes.containersOptionsNavBarContainer }
      >
        <Link to="/customer/products" className={ classes.link }>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            className={ classes.optionsNavBar }
            style={ { backgroundColor: '#2FC18C', color: '#000' } }
          >
            PRODUTOS
          </button>
        </Link>
        <Link to="/customer/orders" className={ classes.link }>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            className={ classes.optionsNavBar }
            style={ { backgroundColor: '#036B52' } }
          >
            MEUS PEDIDOS
          </button>
        </Link>
      </div>
      <div
        className={ classes.containersOptionsNavBarContainer }
      >
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          className={ classes.optionsNavBar }
          style={ { backgroundColor: '#421981', fontWeight: '400' } }
        >
          {userInfos.name}
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          className={ classes.optionsNavBar }
          style={ { backgroundColor: '#056CF9', width: '20%', fontWeight: '400' } }
          onClick={ () => {
            window.localStorage.clear();
            window.location.href = 'http://localhost:3000/login';
          } }
        >
          Sair
        </button>
      </div>
    </div>
  );
}
