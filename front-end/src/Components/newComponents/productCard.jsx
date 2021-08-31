import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
  }, [product.url_image]);

  return (
    <div>
      <div>
        <img
          src={ product.url_image }
          alt={ product.name }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          className="product-image"
        />
      </div>
      <div
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </div>
      <div data-testid={ `customer_products__element-card-price-${product.id}` }>
        {product.price}
      </div>
      <button
        type="button"
        onClick={ decrement }
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>
      <div
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
      >
        {counter}
      </div>
      <button
        type="button"
        onClick={ increment }
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default ProductCard;
