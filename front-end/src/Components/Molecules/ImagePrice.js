import React from 'react';
import PropTypes from 'prop-types';
import { ImagePriceElement } from '../styles';

function ImagePrice({ children }) {
  return (
    <ImagePriceElement>
      <img
        src="https://image.freepik.com/vetores-gratis/na-ilustracao-do-conceito-de-caminho_114360-1191.jpg"
        alt="motobou delivery"
      />
      <span>{children}</span>
    </ImagePriceElement>
  );
}

ImagePrice.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default ImagePrice;
