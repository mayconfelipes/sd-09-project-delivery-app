/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import AppContext from '../hooks/context';
import Navbar from '../components/Navbar';
import '../App.css';

function Products() {
  const { products, getProducts } = useContext(AppContext);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
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
                data-testid={ `customer_products__element-card-price-${id}` }
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
                <h1>{price}</h1>
                <button
                  data-testid={ `customer_products__button-card-rm-item-${id}` }
                  type="button"
                >
                  -
                </button>
                <button
                  data-testid={ `customer_products__button-card-add-item-${id}` }
                  type="button"
                >
                  +
                </button>
              </li>))
          }
        </ul>
      </main>
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        className="button-cart"
      >
        Carrinho
      </button>
    </div>
  );
}

export default Products;
