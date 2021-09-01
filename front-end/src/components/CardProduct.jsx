import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import '../styles/CardProduct.css';
import Context from '../context/Context';

function CardProduct({ product }) {
  const { name, urlImage, price, id } = product;
  const [value, setValue] = useState(0);

  const { addProduct, removeProduct } = useContext(Context);

  const handleChange = (e) => {
    const { name: operation } = e.target;
    if (operation.includes('add')) {
      setValue(value + 1);
      addProduct(product);
    } else if (value > 0) {
      setValue(value - 1);
      removeProduct(product);
    }
  };

  const formatedPrice = (price_) => price_.replace('.', ',');

  return (
    <div>
      <div data-testid={ `customer_products__element-card-price-${id}` }>
        { formatedPrice(price) }
      </div>
      <div>
        <img
          src={ urlImage }
          alt="Bebida"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div>
        <span data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </span>
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
