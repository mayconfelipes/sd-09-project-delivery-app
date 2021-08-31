import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="main">
      <h2 data-testid={ `customer_products__element-card-price-${product.id}` }>
        { product.price }
      </h2>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.url_image }
        alt={ product.name }
      />
      <h2 data-testid={ `customer_products__element-card-title-${product.id}` }>
        { product.name }
      </h2>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          type="button"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
          type="number"
          min="0"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  product: undefined,
};

ProductCard.propTypes = {
  product: PropTypes.shape(PropTypes.string),
};

export default ProductCard;
