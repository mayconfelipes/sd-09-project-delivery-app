import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_products';

function Navbar() {
  return (
    <section>
      <h1>NAVBAR</h1>
      <a data-testid={ `${route}__element-navbar-link-products` } href="/">products</a>
      <a data-testid={ `${route}__element-navbar-link-orders` } href="/">orders</a>
      <p data-testid={ `${route}__element-navbar-user-full-name` }>full name</p>
      <a data-testid={ `${route}__element-navbar-link-logout` } href="/">logout</a>
    </section>
  );
}

export default Navbar;
