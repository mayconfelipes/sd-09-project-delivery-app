import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_products';

function Products() {
  return (
    <section>
      <h1>PRODUTOS</h1>
      <p data-testid={ `${route}__checkout-bottom-value` }>checkout bottom value</p>
    </section>
  );
}

export default Products;
