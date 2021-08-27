import React from 'react';
import PropTypes from 'prop-types';
import { ProductLineElement } from '../styles';
import Text from '../Atoms/Text';
import Button from '../Atoms/Button';

function ProductLine({ children }) {
  return (
    <ProductLineElement>
      <Text>{'<id>'}</Text>
      <Text>{children}</Text>
      <Text>qtd / email usuario</Text>
      <Text>R$ 00,00 / tipo usuario</Text>
      <Text>R$ 00,00</Text>
      <Button>btn</Button>
    </ProductLineElement>
  );
}

ProductLine.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default ProductLine;
