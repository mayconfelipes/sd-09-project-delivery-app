import React from 'react';
import PropTypes from 'prop-types';
import { CardStatusElement } from '../styles';
import Text from '../Atoms/Text';

function CardStatus({ sellerId, status, dateSeller, price, children }) {
  return (
    <CardStatusElement>
      <div data-testid={ sellerId.testId }>
        <Text>Pedido</Text>
        <Text>{sellerId.id}</Text>
      </div>
      <Text testId={ status.testId }>{status.text}</Text>
      <Text testId={ dateSeller.testId }>{dateSeller.text}</Text>
      <Text testId={ price.testId }>{price.text}</Text>
      <Text testId={ children.testId }>{children.text}</Text>
    </CardStatusElement>
  );
}

CardStatus.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default CardStatus;
