import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saleById } from '../services/api';
import NavBar from '../Components/newComponents/NabBar';

function OrderDetail() {
  const [sale, setSale] = useState();
  const { location: { pathname } } = useHistory();
  const orderId = pathname.split('orders/')[1];
  const dataTest = 'customer_order_details__element-order-details-label-delivery-status';
  const tabId = 'customer_order_details__element-order-table-item-number-';
  const tabName = 'customer_order_details__element-order-table-name-';
  const tabQtt = 'customer_order_details__element-order-table-quantity-';
  const tabSubtotal = 'customer_order_details__element-order-table-sub-total-';
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const orderInfo = async () => {
      const order = await saleById(orderId, userInfo.token);
      setSale(order);
    };
    orderInfo();
  }, [orderId]);

  const renderInfo = () => (
    <div>
      <p>
        {'Pedido '}
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {sale.id}
        </span>
        {' P. Vendedora: '}
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {sale.seller.name}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {sale.saleDate.split('T')[0]}
        </span>
        <span
          data-testid={ dataTest }
        >
          {sale.status}
        </span>
        <button type="button">Marcar Como Entregue</button>
      </p>
    </div>
  );

  const renderTableBody = () => (
    sale.product.map((prod) => (
      <tr key={ prod.id }>
        <td data-testid={ tabId + prod.id }>{prod.id}</td>
        <td data-testid={ tabName + prod.id }>{prod.name}</td>
        <td data-testid={ tabQtt + prod.id }>{prod.salesProduct.quantity}</td>
        <td>{prod.price}</td>
        <td
          data-testid={ tabSubtotal + prod.id }
        >
          {prod.salesProduct.quantity * prod.price}
        </td>
      </tr>
    ))
  );

  const renderTableHeader = () => (
    <table>
      <thead>
        <tr>
          <td>Item</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Sub-Total</td>
        </tr>
      </thead>
      <tbody>
        {renderTableBody()}
      </tbody>
    </table>
  );

  const totalValue = () => sale.product
    .reduce((acc, curr) => acc + (curr.salesProduct.quantity * curr.price), 0);

  return (
    <div>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      {sale && renderInfo()}
      {sale && renderTableHeader()}
      <div>
        valor Total:
        <span>{sale && totalValue()}</span>
      </div>
    </div>
  );
}

export default OrderDetail;
