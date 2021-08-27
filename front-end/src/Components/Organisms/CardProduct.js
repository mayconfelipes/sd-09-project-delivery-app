import React from 'react';
import PropTypes from 'prop-types';
import { CardProductElement } from '../styles';
import ImagePrice from '../Molecules/ImagePrice';
import InputRage from '../Molecules/InputRage';

function CardProduct() {
  return (
    <CardProductElement>
      <ImagePrice>teste</ImagePrice>
      <InputRage>Sair</InputRage>
    </CardProductElement>
  );
}

CardProduct.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default CardProduct;
