import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/ProductsContext';

function CartTotal({ testId, text, className }) {
  const {
    currentOrder,
    setCurrentOrderTotal,
    currentOrderTotal } = useContext(ProductsContext);

  useEffect(() => {
    setCurrentOrderTotal(currentOrder
      .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2));
  }, [currentOrder]);

  return (
    <h1 data-testid={ testId } className={ className }>
      {
        `${text}${currentOrderTotal.toString().replace('.', ',')}`
      }
    </h1>

  );
}

CartTotal.propTypes = {
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CartTotal;
