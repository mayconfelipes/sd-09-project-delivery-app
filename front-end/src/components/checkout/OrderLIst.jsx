import React from 'react';

// import { useDeliveryContext } from '../../context/deliveryProvider';
import TableRow from './TableRow';

const OrderLIst = () => {
  const tableHeaders = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitario',
    'Sub-total',
    'Remover item',
  ];

  // const { allProducts } = useDeliveryContext();

  // const { name, unitPrice, quantity, subTotal } = cart[i];

  const teste = [
    {
      name: 'cerveja Skol',
      unitPrice: 5.00,
      quantity: 3,
      subTotal: 15.00,
    },
    {
      name: 'cerveja Stela',
      unitPrice: 10.00,
      quantity: 2,
      subTotal: 20.00,
    },
  ];

  return (
    <div className="order-list-container">
      <table className="order-table">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => <th key={ index }>{ header }</th>)}
          </tr>
        </thead>
        <tbody>
          {teste.map((product, index) => (
            <TableRow key={ index } item={ index } product={ product } />
          ))}
        </tbody>
      </table>
      <span
        className="order-price"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$ 50, 00
      </span>
    </div>
  );
};

export default OrderLIst;
