import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saleById } from '../services/api';
import NavBar from '../Components/newComponents/NabBar';

function OrderDetail() {
  const [sale, setSale] = useState();
  const { location: { pathname } } = useHistory();
  const orderId = pathname.split('orders/')[1];
  // const dataTest = 'customer_order_details__element-order-details-label-delivery-status';
  // const tabId = 'customer_order_details__element-order-table-item-number-';
  // const tabName = 'customer_order_details__element-order-table-name-';
  // const tabQtt = 'customer_order_details__element-order-table-quantity-';
  // const tabSubtotal = 'customer_order_details__element-order-table-sub-total-';
  const startIdEL = 'customer_order_details__element-order-';
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const orderInfo = async () => {
      const order = await saleById(orderId, userInfo.token);
      setSale(order);
    };
    orderInfo();
  }, [orderId]);

  function ajustData(data) {
    const limit = 2;
    let newData = data.split('T', limit);
    newData = newData[0].split('-', limit + 1);
    return newData.reverse().join('/');
  }

  function ajustPrice(price) {
    const newPrice = price.replace('.', ',');
    return newPrice;
  }
  const renderInfo = () => (
    <div>
      <p>
        {'Pedido '}
        <span
          data-testid={ `${startIdEL}details-label-order-id` }
        >
          {sale.id}
        </span>
        {' P. Vendedora: '}
        <span
          data-testid={ `${startIdEL}details-label-seller-name` }
        >
          {sale.seller.name}
        </span>
        <span
          data-testid={ `${startIdEL}details-label-order-date` }
        >
          { ajustData(sale.saleDate) }
        </span>
        <span
          data-testid={ `${startIdEL}details-label-delivery-status` }
        >
          {sale.status}
        </span>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar Como Entregue
        </button>
      </p>
    </div>
  );

  function calcSubtotal(unites, value) {
    const result = unites * value;
    return ajustPrice(result.toFixed(2));
  }

  const renderTableBody = () => (
    sale.product.map((prod, index = 0) => (
      <tr
        key={ prod.id }
        data-testid="customer_order_details__button-delivery-check"
      >
        <td data-testid={ `${startIdEL}table-item-number-${index}` }>
          {prod.id}
        </td>
        <td data-testid={ `${startIdEL}table-name-${index}` }>
          {prod.name}
        </td>
        <td data-testid={ `${startIdEL}table-quantity-${index}` }>
          {prod.salesProduct.quantity}
        </td>
        <td data-testid={ `${startIdEL}table-unit-price-${index}` }>
          { ajustPrice(prod.price)}
        </td>
        <td
          data-testid={ `${startIdEL}table-sub-total-${index}` }
        >
          { calcSubtotal(prod.salesProduct.quantity, prod.price) }
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

  const totalValueRender = () => (
    <span data-testid={ `${startIdEL}total-price` }>
      { ajustPrice(sale.totalPrice)}
    </span>

  );

  // const totalValue = () => sale.product
  //   .reduce((acc, curr) => acc + (curr.salesProduct.quantity * curr.price), 0);
  return (
    <div>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      {sale && renderInfo()}
      {sale && renderTableHeader()}
      <div>
        valor Total:
        {sale && totalValueRender()}
      </div>
    </div>
  );
}

export default OrderDetail;
