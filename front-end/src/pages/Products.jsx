import React, { useCallback, useContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import AppContext from '../hooks/context';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
// import '../App.css';

const SECRET_KEY = 'minhachavesecreta';

function Products() {
  const {
    products,
    getProducts,
    productsCart,
    loading } = useContext(AppContext);

  const router = useHistory();
  const [disable, setDisable] = useState(true);
  let total = 0;

  const test = useCallback(() => getProducts(), [getProducts]);

  useEffect(() => {
    test();
  }, [test]);

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
  }, [router]);

  const handleClick = () => {
    localStorage.setItem('productCart', JSON.stringify(productsCart));
    router.push('/customer/checkout');
  };

  const totalPrice = () => {
    const productsKeys = Object.keys(productsCart);
    productsKeys.forEach((product) => {
      total += productsCart[product].quantity * Number(productsCart[product].price);
    });
    if (total > 0 && disable) {
      setDisable(false);
    }
    return total.toFixed(2).toString().replace(/\./ig, ',');
  };

  if (loading || !products.length) {
    return (
      <div className="main">
        <Navbar />
        <main><h1>loading...</h1></main>
      </div>
    );
  }

  return (
    <div className="main">
      <Navbar />
      <main>
        <ul className="main--products">
          {
            products.map(({ name, urlImage, price, id }, index) => (
              <ProductCard
                key={ name }
                product={ { name, urlImage, price, id, index } }
              />
            ))
          }
        </ul>
      </main>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        className="button-cart"
        onClick={ handleClick }
        disabled={ disable }
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { totalPrice() }
        </span>
      </button>
    </div>
  );
}

export default Products;
