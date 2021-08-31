import React, { useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
import context from '../services/context';

function CartTotal() {
  const { currentOrder, setCurrentOrderTotal, currentOrderTotal } = useContext(context);

  useEffect(() => {
    setCurrentOrderTotal(currentOrder
      .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0));
  }, [currentOrder]);

  return (
    <div>
      <h1 data-testid="customer_checkout__element-order-total-price">
        {
          `Total do pedido: ${currentOrderTotal}`
        }
      </h1>
    </div>
  );
}

// CartTotal.propTypes = {
//   total: PropTypes.number.isRequired,
// };

export default CartTotal;
