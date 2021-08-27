import React from 'react';
import P from 'prop-types';
import style from './productCard.module.scss';

const ProductCard = ({ id, price, image, description }) => (
  <div className={ style.productCardContainer }>
    <span data-testid={ `customer_products__element-card-price-${id}` }>{price}</span>
    <img
      data-testid={ `customer_products__img-card-bg-image-${id}` }
      src={ image }
      alt={ description }
    />
    <div className={ style.productCard }>
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>{description}</h2>
      <div className={ style.quantityContainer }>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          className={ style.decrement }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          // value="0"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          className={ style.increment }
        >
          +
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;

ProductCard.propTypes = {
  price: P.string.isRequired,
  image: P.string.isRequired,
  description: P.string.isRequired,
  id: P.number.isRequired,
};
