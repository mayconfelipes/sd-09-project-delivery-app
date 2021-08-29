import React from 'react';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const router = useHistory();

  const handleClick = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <a
            data-testid="customer_products__element-navbar-link-products"
            href="/customer/products"
          >
            Produtos
          </a>
        </li>
        <li>
          <a
            href="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </a>
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          {name}
        </li>
        <li>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ handleClick }
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
