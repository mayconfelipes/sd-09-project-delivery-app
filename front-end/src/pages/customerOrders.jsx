import React from 'react';
import NavBarCustomer from '../components/navBarCustomer';

function CustomerProducts() {
  return (
    <div>
      <NavBarCustomer textProp="pedidos" />

      {/*
        status_card será populado dentro de um map, talvez :)
        e também poderia virar um componente
      */}
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

export default CustomerProducts;
