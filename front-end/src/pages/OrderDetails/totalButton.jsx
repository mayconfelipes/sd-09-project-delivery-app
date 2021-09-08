import React from 'react';
import PropTypes from 'prop-types';

const dataTestId = require('../../utills/dataTestIds');

const TotalButton = (props) => {
  const { totalPrice } = props;
  console.log('AQUIIII', totalPrice);
  return (
    <button type="button" data-testid={ dataTestId[46] }>{totalPrice}</button>
  );
};

TotalButton.propTypes = {
  totalPrice: PropTypes.string,
}.isRequired;

export default TotalButton;
