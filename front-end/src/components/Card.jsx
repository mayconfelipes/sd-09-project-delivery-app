import React from 'react';
import PropTypes from 'prop-types';
import AddDecItemCard from './AddDecItemCard';

const Card = ({ id, price, title, image }) => (
  <div className="card-product">
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ title }
        src={ image }
        className="card-product-img"
      />
    </div>
    <div className="card-product-footer">
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        { title }
      </span>
      <AddDecItemCard id={ id } />
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
