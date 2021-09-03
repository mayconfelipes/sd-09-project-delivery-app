import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/loginContext';
import './ProductsCard.css';

const ProductsCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(LoginContext);
  const { id, name, price, url_image: urlImage } = product;

  useEffect(() => {
    const isInCart = cart.filter((item) => item.id === id);
    if (quantity === 0) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      return;
    }
    if (isInCart.length > 0) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart([...newCart, { id, quantity, name, price: Number(price) }]);
      return;
    }
    setCart([...cart, { id, quantity, name, price: Number(price) }]);
  }, [quantity]);

  const dec = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const inc = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="card">
      <div
        className="card_price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace('.', ',') }
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="produto"
      />
      <p
        className="card_body"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <div className="card_foot">
        <button
          type="button"
          onClick={ () => dec() }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="text"
          value={ quantity }
          onChange={ (e) => {
            if (e.target.value < 0) {
              return;
            }
            setQuantity(Number(e.target.value));
          } }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          onClick={ () => inc() }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};

export default ProductsCard;
