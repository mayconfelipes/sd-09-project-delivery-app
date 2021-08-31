import React from 'react';
// import salesAPI from "../../services/salesAPI";

const MockSalesDB = [
  {
    id: 32,
    item_name: 'Skol',
    quantity: 2,
    unit_price: 90,
    subtotal_price: 200,
    sale_date: '20/04/20',
    status: 'PREPARANDO',
  },
  {
    id: 143,
    item_name: 'Heinekein',
    quantity: 100,
    unit_price: 90,
    subtotal_price: 10000,
    sale_date: '20/04/20',
    status: 'ENTREGUE',
  },
];

export default function Sales() {
  return MockSalesDB.map((sale) => (
    <div key={ sale.id } className="card-sale">
      <p>Pedido</p>
      {sale.id}
      <div
        className="date-sale"
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {sale.date}
      </div>
      <div
        className="status-sale"
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {sale.status}
      </div>
      <div
        className="status-sale"
        data-testid="seller_order_details__button-preparing-check"
      >
        PREPARAR PEDIDO
      </div>
      <div
        className="status-sale"
        data-testid="seller_order_details__button-dispatch-check"
      >
        SAIU PARA ENTREGA
      </div>
      <section>
        <p
          className="item-number"
          data-testid="seller_order_details__element-order-table-item-number-"
        >
          1
        </p>
        <p
          className="item-name"
          data-testid="seller_order_details__element-order-table-name-"
        >
          {sale.item_name}
        </p>
        <div
          className="quantity"
          data-testid="seller_order_details__element-order-table-quantity-"
        >
          {sale.quantity}
        </div>
        <div
          className="unit-price"
          data-testid="seller_order_details__element-order-table-unit-price-"
        >
          R$
          {sale.unit_price}
        </div>
        <div
          className="total-price"
          data-testid="seller_order_details__element-order-table-sub-total-"
        >
          R$
          {sale.subtotal_price}
        </div>
      </section>

      <div
        className="total-price"
        data-testid="seller_order_details__element-order-total-price"
      >
        Total:
      </div>
    </div>

  ));
}
