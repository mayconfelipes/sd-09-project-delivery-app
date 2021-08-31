import React, { useContext } from 'react';
import context from '../services/context';

function ConfirmOrderButton() {
  const { submitOrder } = useContext(context);
  return (
    <button
      type="button"
      data-testid="customer_checkout__button-submit-order"
      onClick={ () => submitOrder() }
    >
      FINALIZAR PEDIDO
    </button>
  );
}

export default ConfirmOrderButton;
