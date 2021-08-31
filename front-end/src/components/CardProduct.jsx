import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/CardProduct.css';

const CardProduct = ({ ...rest }) => {
  const { xablau } = rest;

  return (
    <div>
      <img src={ xablau } alt="Bebida" />
      <button type="button">+</button>
      <input type="text" value="0" />
      <button type="button">-</button>
    </div>
  );
};

export default CardProduct;
