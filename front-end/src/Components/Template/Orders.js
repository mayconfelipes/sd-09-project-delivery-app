import React from 'react';
import PropTypes from 'prop-types';
import { OrdersElement } from '../styles';
import Title from '../Atoms/Title';
import ProductLine from '../Molecules/ProductLine';
import Text from '../Atoms/Text';

function Orders({ children }) {
  return (
    <OrdersElement>
      <Title>Finalizar Pedido</Title>
      <ProductLine>{children}</ProductLine>
      <Text>Total: R$ 00,00</Text>
    </OrdersElement>
  );
}

Orders.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Orders;
