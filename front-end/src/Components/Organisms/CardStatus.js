import React from 'react';
import PropTypes from 'prop-types';
import { CardStatusElement } from '../styles';
import Text from '../Atoms/Text';

function CardStatus({ sellerId, status, dateSeller, price, children }) {
  return (
    <CardStatusElement>
      <Text>Pedido</Text>
      <Text>{sellerId}</Text>
      <Text>{status}</Text>
      <Text>{dateSeller}</Text>
      <Text>{price}</Text>
      <Text>{children}</Text>
    </CardStatusElement>
  );
}

CardStatus.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default CardStatus;
