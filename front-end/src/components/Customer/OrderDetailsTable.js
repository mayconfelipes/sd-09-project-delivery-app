import React from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_order_details';

function OrderDetailsTable() {
  return (
    <section>
      <h1>TABELA DE DETALHES DA VENDA</h1>
      <p data-testid={ `${route}__element-card-title-{id}` }>item-number</p>
      <p data-testid={ `${route}__element-order-table-name-{id}` }>name</p>
      <p data-testid={ `${route}__element-order-table-quantity-{id}` }>quantity</p>
      <p data-testid={ `${route}__element-order-table-sub-total-{id}` }>sub-total</p>
    </section>
  );
}

OrderDetailsTable.propTypes = {
  id: number,
}.isRequired;

export default OrderDetailsTable;
// deliveryAddress: "sad"
// deliveryNumber: "sad"
// id: 1
// saleDate: "2021-09-02T15:39:28.000Z"
// sellerId: 2
// status: "Pendente"
// totalPrice: "21.60"
// userId: 4
