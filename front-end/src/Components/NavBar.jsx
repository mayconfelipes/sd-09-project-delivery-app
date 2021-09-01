import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar() {
  const history = useHistory();

  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <span>
        <button
          type="button"
          onClick={ () => history.push('/customer/products') }
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          Meus Pedidos
        </button>
      </span>
      <span>
        <button
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          {name}
        </button>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          Sair
        </button>
      </span>
    </nav>
  );
}

export default NavBar;
