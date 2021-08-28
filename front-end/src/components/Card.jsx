import React from 'react';
import PropTypes from 'prop-types';
import AddDecItemCard from './AddDecItemCard';

const Card = ({ id, price, title }) => ( // desistruturei vem como objeto
  <div className="card-product">
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        { price }
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ title }
      />
    </div>
    <div>
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
};

export default Card;
