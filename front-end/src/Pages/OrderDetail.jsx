import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saleById, editStatusOrder } from '../services/api';
import NavBar from '../Components/newComponents/NabBar';

function OrderDetail() {
  const [sale, setSale] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const { location: { pathname } } = useHistory();
  const orderId = pathname.split('orders/')[1];
  const startIdEL = 'customer_order_details__element-order-';

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const orderInfo = async () => {
      const order = await saleById(orderId, userInfo.token);
      setSale(order);
    };
    orderInfo();
  }, [orderId]);

  useEffect(() => {
    if (sale && sale.status === 'Em Trânsito') setIsDisabled(false);
  }, [sale]);

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

  const handleClick = async () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    await editStatusOrder(userInfo.token, { id: sale.id, status: 'Entregue' });
    setIsDisabled(true);
    setSale({ ...sale, status: 'Entregue' });
  };

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
          onClick={ handleClick }
          data-testid="customer_order_details__button-delivery-check"
          disabled={ isDisabled }
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
    sale.product.map((prod, i) => (
      <tr
        key={ prod.id }
        data-testid="customer_order_details__button-delivery-check"
      >
        <td data-testid={ `${startIdEL}table-item-number-${i}` }>
          {prod.id}
        </td>
        <td data-testid={ `${startIdEL}table-name-${i}` }>
          {prod.name}
        </td>
        <td data-testid={ `${startIdEL}table-quantity-${i}` }>
          {prod.salesProduct.quantity}
        </td>
        <td data-testid={ `${startIdEL}table-unit-price-${i}` }>
          { ajustPrice(prod.price)}
        </td>
        <td
          data-testid={ `${startIdEL}table-sub-total-${i}` }
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

  return (
    <div>
      {console.log('se repetir é loop')}
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
