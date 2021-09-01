import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';

function ProductCard({ product }) {
  const [counter, setCounter] = useState(0);
  const { totalPrice, setTotalPrice } = useCart();
  const increment = () => {
    const price = Number(parseFloat(product.price).toFixed(2));
    setTotalPrice(totalPrice + price);
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      const price = Number(parseFloat(product.price).toFixed(2));
      setTotalPrice(totalPrice - price);
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  const manuallyCounter = (quantity) => {
    if (quantity < 0) { return; }

    if (quantity === '') { quantity = 0; }

    const difference = parseFloat(quantity) - parseFloat(counter);

    const price = Number(parseFloat(product.price).toFixed(2));

    if (difference > 0) {
      const priceToAdd = price * difference;
      setTotalPrice(totalPrice + priceToAdd);
    } else {
      const priceToSubtract = price * difference;
      setTotalPrice(totalPrice + priceToSubtract);
    }
    setCounter(quantity);
  };

  useEffect(() => {
  }, [product.url_image]);

  const convertDotToComma = (string) => string.replace(/\./g, ',');

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
        {convertDotToComma(product.price)}
      </div>
      <button
        type="button"
        onClick={ decrement }
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        onChange={ (e) => manuallyCounter(e.target.value) }
        value={ counter }
      />
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
