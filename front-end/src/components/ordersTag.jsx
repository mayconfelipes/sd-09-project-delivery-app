import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import '../styles/ordersTag.css';

function OrderTag() {
  const { allOrders, getOrders } = useContext(ProductsContext);

  useEffect(() => {
    getOrders();
  }, [allOrders]);
  return (
    <div className="container_status_cards">
      <div className="status_card">
        <div
          className="num_pedido"
          data-testid="customer_orders__element-order-id-"
        >
          <div>pedido</div>
          <div>0001</div>
        </div>

        <div
          className="status_do_pedido"
          data-testid="34: customer_orders__element-delivery-status-"
        >
          Pendente
        </div>

        <div
          className="data"
          data-testid="customer_orders__element-order-date-"
        >
          <span>01/01/2001</span>
        </div>

        <div className="total">
          <span>R$ 99,00</span>
        </div>
      </div>
    </div>
  );
}

export default OrderTag;
