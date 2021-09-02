import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import '../styles/CardProduct.css';
import Context from '../context/Context';

function CardProduct({ product }) {
  const { name, urlImage, price, id } = product;
  const [value, setValue] = useState(0);
  const { addProduct, removeProduct } = useContext(Context);

  const handleChange = (e) => {
    const { name: operation } = e.target;
    if (operation.includes('add')) {
      const quantity = value + 1;
      setValue(quantity);
      addProduct({ ...product, quantity });
    } else if (value > 0) {
      const quantity = value - 1;
      setValue(quantity);
      removeProduct({ ...product, quantity });
    }
  };

  const formatedPrice = (price_) => price_.replace('.', ',');

  return (
    <div className="product__card">
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
        className="product__card__price"
      >
        { formatedPrice(price) }
      </span>
      <img
        src={ urlImage }
        alt="Bebida"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        className="product__card__image"
      />
      <h2
        data-testid={ `customer_products__element-card-title-${id}` }
        className="product__card__title"
      >
        { name }
      </h2>
      <div>
        <button
          type="button"
          name="rm-button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ (e) => handleChange(e) }
        >
          -
        </button>

        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ value }
          readOnly
        />
        <button
          type="button"
          name="add-button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ (e) => handleChange(e) }
        >
          +
        </button>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired };

export default CardProduct;
