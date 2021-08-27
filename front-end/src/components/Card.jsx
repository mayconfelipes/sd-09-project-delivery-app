import React from 'react';
import PropTypes from 'prop-types';
import AddDecItemCard from './AddDecItemCard';

const Card = ({ id, price, image, title, qtdEstoque }) => ( // desistruturei vem como objeto
  <div className="card-product">
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        { price }
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ title }
      />
    </div>
    <div>
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        { title }
      </span>
      <AddDecItemCard id={ id } qtdEstoque={ qtdEstoque } />
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  qtdEstoque: PropTypes.string.isRequired,
};

export default Card;
