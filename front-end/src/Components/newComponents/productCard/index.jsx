import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useCart } from '../../../Contexts/CartContext';
import './style.css';

function ProductCard({ product }) {
  const [counter, setCounter] = useState(0);
  const { totalPrice, setTotalPrice, setCartItems, cartItems } = useCart();

  const increment = () => {
    const price = Number(parseFloat(product.price).toFixed(2));
    setTotalPrice(totalPrice + price);
    if (counter === 0) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      const currentProductIndex = cartItems.findIndex(({ id }) => id === product.id);
      cartItems[currentProductIndex].quantity = counter + 1;
      setCartItems(cartItems);
    }
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      if (counter === 1) {
        const filteredCartItems = cartItems.filter(({ id }) => id !== product.id);
        setCartItems(filteredCartItems);
        const price = Number(parseFloat(product.price).toFixed(2));
        setTotalPrice(totalPrice - price);
        setCounter(0);
      } else {
        const currentProductIndex = cartItems.findIndex(({ id }) => id === product.id);
        cartItems[currentProductIndex].quantity = counter - 1;
        setCartItems(cartItems);
        const price = Number(parseFloat(product.price).toFixed(2));
        setTotalPrice(totalPrice - price);
        setCounter(counter - 1);
      }
    } else {
      setCounter(0);
    }
  };

  const manuallyCounter = (inputValue) => {
    if (inputValue === '') { inputValue = 0; }

    if (inputValue < 0) { return; }

    if (inputValue === 0) {
      const filteredCartItems = cartItems.filter(({ id }) => id !== product.id);
      setCartItems(filteredCartItems);
      setCounter(0);
    }

    const difference = parseFloat(inputValue) - parseFloat(counter);

    const price = Number(parseFloat(product.price).toFixed(2));

    if (difference > 0) {
      if (inputValue === 0) {
        const filteredCartItems = cartItems.filter(({ id }) => id !== product.id);
        setCartItems(filteredCartItems);
        setCounter(0);
      }
      if (counter === 0) {
        setCartItems([...cartItems, { ...product, quantity: inputValue }]);
      } else {
        const currentProductIndex = cartItems.findIndex(({ id }) => id === product.id);
        cartItems[currentProductIndex].quantity = inputValue;
        setCartItems(cartItems);
      }
      const priceToAdd = price * difference;
      setTotalPrice(totalPrice + priceToAdd);
    } else {
      const priceToSubtract = price * difference;
      setTotalPrice(totalPrice + priceToSubtract);
    }
    setCounter(Number(inputValue));
  };

  const convertDotToComma = (string) => string.replace(/\./g, ',');

  const counterDiv = () => (
    <div className="product-card-counter">
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
        onChange={ (e) => manuallyCounter(+e.target.value) }
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

  return (
    <div className="product-card">
      <div>
        <img
          src={ product.url_image }
          alt={ product.name }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          className="product-image"
        />
      </div>
      <div
        className="product-card-name"
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </div>
      <div
        className="product-card-price"
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {convertDotToComma(product.price)}
      </div>
      {counterDiv()}
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default ProductCard;
