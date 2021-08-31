import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = null;
  // {
  // // JSON.parse(localStorage.getItem('user'))
  //   name: 'Nome Da Pessoa Usuária',
  //   email: 'email@dominio.com',
  //   role: 'customer',
  //   token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTm9tZSBEYSBQZXNzb2EgVXN1w6Fy
  //   aWEiLCJlbWFpbCI6ImVtYWlsQGRvbWluaW8uY29tIiwicm9sZSI6ImN1c3RvbWVyIn0.s5cmiyY16yViCXkHu
  //   zWekxkMeYBi75eT8uJnSbfadNE`,
  // };

  return (
    <div>
      { user }
      <div>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div>
        <h2 data-testid="customer_products__element-navbar-user-full-name">
          NAME
        </h2>
        <Link
          to="/customer/chekout"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </div>
    </div>
  );
};

export default Header;
