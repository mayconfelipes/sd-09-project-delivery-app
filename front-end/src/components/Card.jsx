import React from 'react';
import PropTypes from 'prop-types';
import AddDecItemCard from './AddDecItemCard';
import testid from '../utils/dataTestIds';

const Card = ({ id, price, title, image }) => (
  <div className="card-product">
    <div>
      <span className="card-price" data-testid={ `${testid[16]}${id}` }>
        {parseFloat(price).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
      <img
        data-testid={ `${testid[17]}${id}` }
        alt={ title }
        src={ image }
        className="card-product-img"
      />
    </div>
    <div className="card-product-footer">
      <span data-testid={ `${testid[15]}${id}` }>{title}</span>
      <AddDecItemCard id={ id } />
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
