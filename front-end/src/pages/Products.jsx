import React from 'react';
import Navbar from '../components/Navbar';

function Products() {
  return (
    <div>
      <Navbar />
      Varios produtos
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
      >
        Carrinho
      </button>
    </div>
  );
}

export default Products;
