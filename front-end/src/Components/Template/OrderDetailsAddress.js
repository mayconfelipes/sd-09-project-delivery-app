import React from 'react';
import PropTypes from 'prop-types';
import { OrderDetailsAddressElement } from '../styles';
import Subtitle from '../Atoms/Subtitle';
import InputText from '../Molecules/InputText';
import Button from '../Atoms/Button';

function OrderDetailsAddress({ children }) {
  return (
    <OrderDetailsAddressElement>
      <Subtitle>{children}</Subtitle>
      <InputText>responsavel</InputText>
      <InputText>endereco</InputText>
      <InputText>numero</InputText>
      <Button>Finalizar pedido</Button>
    </OrderDetailsAddressElement>
  );
}

OrderDetailsAddress.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default OrderDetailsAddress;
