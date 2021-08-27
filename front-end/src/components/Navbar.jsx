import React from 'react';
import './css/navbar.css';

function Navbar() {
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
          Osni da Silva Alberto Ribeiro
        </p>
      </div>
      <div>
        <a
          href="/"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </a>
      </div>
    </div>
  );
}

export default Navbar;
