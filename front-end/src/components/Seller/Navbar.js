import React from 'react';

const route = 'customer_products';
const testid = `${route}__element-navbar`;

function Navbar() {
  const clearStorage = () => { localStorage.user = ''; };

  return (
    <nav>
      <h1>NAVBAR</h1>
      <a data-testid={ `${testid}-link-orders` } href="/seller/orders">
        PEDIDOS
      </a>
      <p data-testid={ `${testid}-user-full-name` }>
        { JSON.parse(localStorage.user).name }
      </p>
      <a data-testid={ `${testid}-link-logout` } href="/" onClick={ clearStorage }>
        Sair
      </a>
    </nav>
  );
}

export default Navbar;
