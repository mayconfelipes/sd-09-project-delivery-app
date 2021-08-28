import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { decrement, increment } from '../utils/actionAddDec';

const AddDecItemCard = ({ id }) => (
  <div>
    <Button
      buttonText="-"
      id={ `negative-${id}` } // para não ter id igual
      dataTestId={ `customer_products__button-card-add-item-${id}` }
      onClick={ decrement }
      classStyle="card-button card-button-left"
    />
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` }
      id={ `qtd-${id}` }
      value={ 0 }
      className="card-input"
    />
    <Button
      buttonText="+"
      id={ `positive-${id}` }
      dataTestId={ `customer_products__button-card-rm-item-${id}` }
      onClick={ increment }
      classStyle="card-button card-button-right"
    />
  </div>
);

AddDecItemCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddDecItemCard;
