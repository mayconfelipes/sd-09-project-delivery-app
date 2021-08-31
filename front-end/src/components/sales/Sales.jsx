import React from 'react';
// import salesAPI from "../../services/salesAPI";

const MockSalesDB = [
  {
    id: 32,
    total_price: 200,
    delivery_address: 'Bica de Pedra, Bairro Pompéia, 420',
    sale_date: '20/04/20',
    status: 'PREPARANDO',
  },
  {
    id: 143,
    total_price: 10000,
    delivery_address: 'Alphaville, Bairro Leblon, 420',
    sale_date: '20/04/20',
    status: 'ENTREGUE',
  },
];

export default function Sales() {
  return MockSalesDB.map((sale) => (
    <section key={ sale.id } className="card-sale">
      <p data-testid="seller_orders__element-order-id-">Pedido</p>
      {sale.id}

      <div
        className="status-sale"
        data-testid="seller_orders__element-delivery-status-"
      >
        {sale.status}
      </div>

      <div
        className="date-sale"
        data-testid="seller_orders__element-order-date-"
      >
        {sale.date}
      </div>
      <div
        className="total-price"
        data-testid="seller_orders__element-card-price-"
      >
        R$
        {sale.total_price}
      </div>

      <div
        className="address-sale"
        data-testid="seller_orders__element-card-address-"
      >
        {sale.delivery_address}
      </div>
    </section>
  ));
}
