import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

function ConfirmOrderButton() {
  const { submitOrder } = useContext(ProductsContext);
  return (
    <button
      className="confirm-order-button"
      type="button"
      data-testid="customer_checkout__button-submit-order"
      onClick={ () => submitOrder() }
    >
      FINALIZAR PEDIDO
    </button>
  );
}

export default ConfirmOrderButton;
