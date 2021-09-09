import React from 'react';
import NavBar from '../Components/NavBar';

function OrderDetails() {
  return (
    <>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <table>
        <tr>
          <th data-testid="seller_order_details__element-order-details-label-order-id">
            Pedido 001
          </th>
          <th
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            08/04/21
          </th>
          <th
            data-testid="
              seller_order_details__element-order-details-label-delivery-status"
          >
            Pendente
          </th>
          <th>
            <button
              type="button"
              data-testid="seller_order_details__button-preparing-check"
            >
              Preparar Pedido
            </button>
          </th>
          <th
            data-testid="seller_order_details__button-dispatch-check"
          >
            Saiu para entrega
          </th>
        </tr>
        <tr>
          <td data-testid="">Item</td>
          <td data-testid="">Descrição</td>
          <td data-testid="">Quantidade</td>
          <td data-testid="">Valor Unitário</td>
          <td data-testid="">Sub-total</td>
        </tr>
        <tr>
          <td
            data-testid="seller_order_details__element-order-table-item-number-"
          >
            1
          </td>
          <td
            data-testid="seller_order_details__element-order-table-name-"
          >
            skol
          </td>
          <td
            data-testid="seller_order_details__element-order-table-quantity-"
          >
            4
          </td>
          <td
            data-testid="seller_order_details__element-order-table-unit-price-"
          >
            R$ 2,20
          </td>
          <td
            data-testid="seller_order_details__element-order-table-sub-total-"
          >
            R$ 8,80
          </td>
        </tr>
      </table>
      <h2 data-testid="seller_order_details__element-order-total-price">Total</h2>
    </>
  );
}

export default OrderDetails;
