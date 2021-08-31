import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardProduct.css';

function CardProduct({ product }) {
  console.log(product);
  const { name, urlImage, price } = product;

  return (
    <div>
      <div data-testid="customer_products__element-card-price-">{ price }</div>

      <div>
        <img
          src={ urlImage }
          alt="Bebida"
          data-testid="customer_products__img-card-bg-image-"
        />
      </div>

      <div>
        <span>{ name }</span>

        <button type="button">-</button>
        <input
          type="text"
          data-testid="customer_products__input-card-quantity-"
        />
        <button
          type="button"
          data-testeid="customer_products__button-card-add-item-"
        >
          +
        </button>

      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired };

export default CardProduct;
