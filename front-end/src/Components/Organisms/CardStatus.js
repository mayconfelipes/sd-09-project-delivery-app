import React from 'react';
import PropTypes from 'prop-types';
import { CardStatusElement } from '../styles';
import Text from '../Atoms/Text';

function CardStatus({ children }) {
  return (
    <CardStatusElement>
      <Text>Pedido</Text>
      <Text>{children}</Text>
      <Text>Entregue</Text>
      <Text>DD/MM/AA</Text>
      <Text>R$ 00,00</Text>
      <Text>{'< Endereco >'}</Text>
    </CardStatusElement>
  );
}

CardStatus.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default CardStatus;
