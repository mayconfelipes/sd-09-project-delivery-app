import React, { useContext, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import AppContext from '../hooks/context';
import Navbar from '../components/Navbar';
import '../App.css';

const SECRET_KEY = 'minhachavesecreta';

function Products() {
  const { products, getProducts } = useContext(AppContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
    <div className="main">
      <Navbar />
      <main>
        <ul className="main--products">
          {
            products.map(({ name, urlImage, price, id }, index) => (
              <li
                key={ index }
                className="main--products"
              >
                <h4
                  data-testid={ `customer_products__element-card-title-${id}` }
                >
                  {name}
                </h4>
                <img
                  className="main--img"
                  src={ urlImage }
                  alt={ name }
                  data-testid={ `customer_products__img-card-bg-image-${id}` }
                />
                <h1
                  data-testid={ `customer_products__element-card-price-${id}` }
                >
                  {price.replace(/\./ig, ',')}
                </h1>
                <div className="main--add-item-btn">
                  <button
                    data-testid={ `customer_products__button-card-rm-item-${id}` }
                    type="button"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    data-testid={ `customer_products__input-card-quantity-${id}` }
                    value={ 0 }
                  />
                  <button
                    data-testid={ `customer_products__button-card-add-item-${id}` }
                    type="button"
                  >
                    +
                  </button>
                </div>
              </li>))
          }
        </ul>
      </main>
      <button
        // data-testid="customer_products__checkout-bottom-value"
        data-testid="customer_products__button-cart"
        type="button"
        className="button-cart"
      >
        Carrinho
      </button>
    </div>
  );
}

export default Products;
