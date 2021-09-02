import React, { useContext } from 'react';
import Context from '../context/Context';

export default function CardOrder() {
// PENDENTE - PREPARANDO - ENTREGUE
  const { products } = useContext(Context);
  console.log(products);
  return (
    <div className="corpo_card">
      <div className="div_pedido">
        <span>Pedido</span>
        <span data-testid="customer_orders__element-order-id-<id>">0001</span>
      </div>

      <button
        type="button"
        data-test-id=" customer_orders__element-delivery-status-<id>"
      >
        situação
      </button>

      <div className="data_valor">
        <span data-testid="customer_orders__element-order-date-<id>">08/02/02</span>
        <span>R$totalpedido</span>
      </div>
    </div>
  );
}
