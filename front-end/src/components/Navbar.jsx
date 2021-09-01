import React from 'react';
import { useHistory } from 'react-router-dom';
// import './css/navbar.css';

function Navbar() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const router = useHistory();

  const handleClick = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <nav className="navbar">
      <div>
        <a
          data-testid="customer_products__element-navbar-link-products"
          href="/customer/products"
        >
          Produtos
        </a>
      </div>
      <div>
        <a
          href="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </a>
      </div>
      <div data-testid="customer_products__element-navbar-user-full-name">
        <p>
          {name}
        </p>
      </div>
      <div>
        <button
          href="/"
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleClick }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
