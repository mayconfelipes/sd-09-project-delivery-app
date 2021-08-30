import React from 'react';
<<<<<<< HEAD
import './css/navbar.css';
=======
import { useHistory } from 'react-router-dom';
>>>>>>> 72557ddb7f332bb1d227ae0bb857a86a1ab162a9

function Navbar() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const router = useHistory();

  const handleClick = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <div className="navbar">
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
          {}
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
    </div>
  );
}

export default Navbar;
