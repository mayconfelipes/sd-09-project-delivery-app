import React from 'react';

function NavBarCustomer() {
  return (
    <nav className="navbar">
      <div className="left_side">
        <div
          className="navbar_produtos"
          data-testid="customer_products__element-navbar-link-products"
        >
          <a href="/customer">PRODUTOS</a>
        </div>

        <div
          className="navbar_pedidos"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <a href="/orders">MEUS PEDIDOS</a>
        </div>
      </div>

      <div className="right_side">
        <div
          className="navbar_nome"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Nome do usuário
        </div>

        <div
          className="navbar_sair"
          data-testid="customer_products__element-navbar-link-logout"
        >
          <a href="/customer">Sair</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBarCustomer;
