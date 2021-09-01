import React from 'react';
import PropTypes from 'prop-types';

const CheckoutItem = (props) => {
  const { cartItem: { totalProduct, price, quant, name } } = props;
  return (
    <li>
      <p>{name}</p>
      <p>{quant}</p>
      <p>{price}</p>
      <p>{totalProduct}</p>
    </li>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
}.isRequired;

export default CheckoutItem;
