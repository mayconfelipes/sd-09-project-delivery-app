import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function Products() {
  return (
    <div className="main">
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
