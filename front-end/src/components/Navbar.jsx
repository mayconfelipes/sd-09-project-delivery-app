import React from 'react';

function Navbar() {
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
          Osni da Silva Alberto Ribeiro da Silva
        </li>
        <li>
          <a
            href="/"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
