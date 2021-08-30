import React, { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SECRET_KEY = 'minhachavesecreta';

function Products() {
  const router = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      return router.push('/');
    }

    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      jwt.verify(token, SECRET_KEY);
    } catch (error) {
      localStorage.removeItem('user');
      router.push('/');
    }
  });

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
