import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({
  id,
  name,
  price,
  urlImage,
  updateTotalPrice,
  addToCart,
  removeFromCart,
  changeTotalPrice,
}) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h6 data-testid={ `customer_products__element-card-price-${id}` }>
        {price.toString().replace(/\./, ',') }
      </h6>
      <img
        width="50px"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="Product"
      />
      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </p>
        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => {
              if (quantity !== 0) {
                updateTotalPrice('subtract', price);
                setQuantity(quantity - 1);
                removeFromCart({ id, price });
              }
            } }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            onChange={ ({ target: { value } }) => {
              setQuantity(value);
              changeTotalPrice(value * price);
              addToCart({ id, name, price: price * value });
            } }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => {
              updateTotalPrice('add', price);
              setQuantity(quantity + 1);
              addToCart({ id, name, price });
            } }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
  updateTotalPrice: PropTypes.func,
}.isRequired;

export default ProductCard;
