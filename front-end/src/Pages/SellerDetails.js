import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/newComponents/NabBarAdmin';
import { editStatusOrder, saleById } from '../services/api';
import { formatDate, formatPrice } from '../services/functions';

function SellerDetails() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [detailsOrder, setDetailsOrder] = useState();
  let totalOrder = 0;
  const linksNavbar = [
    {
      text: 'pedido',
      url: 'https://localhost:3000',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];

  const allDataIds = (key, index) => {
    const dataIds = {
      orderId: 'seller_order_details__element-order-details-label-order-id',
      orderDate: 'seller_order_details__element-order-details-label-order-date',
      deliveryStatus:
        'seller_order_details__element-order-details-label-delivery-status',
      preparing: 'seller_order_details__button-preparing-check',
      dispatch: 'seller_order_details__button-dispatch-check',
      item: `seller_order_details__element-order-table-item-number-${index}`,
      name: `seller_order_details__element-order-table-name-${index}`,
      quantity: `seller_order_details__element-order-table-quantity-${index}`,
      price: `seller_order_details__element-order-table-unit-price-${index}`,
      subTotal: `seller_order_details__element-order-table-sub-total-${index}`,
      total: 'seller_order_details__element-order-total-price',
    };

    return dataIds[key];
  };

  const changeStatusOrder = async ({ target: { textContent } }) => {
    const status = textContent === 'Preparar Pedido' ? 'Preparando' : 'Em Trânsito';
    const user = JSON.parse(localStorage.getItem('user'));
    const request = await editStatusOrder(user.token, { id, status });
    if (request.message === 'Preparando' || request.message === 'Em Trânsito') {
      setDetailsOrder({ ...detailsOrder, status: request.message });
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.name);
    const getSaleDetails = async () => {
      const request = await saleById(id, user.token);
      setDetailsOrder(request);
    };
    getSaleDetails();
  }, [id]);

  return (
    <>
      <NavBar links={ linksNavbar } user={ name } />
      <h1>Detalhes do Pedido</h1>
      <div>
        {detailsOrder && (
          <>
            <ul>
              <li>
                Pedido
                <span data-testid={ allDataIds('orderId') }>{detailsOrder.id}</span>
              </li>
              <li data-testid={ allDataIds('orderDate') }>
                {formatDate(detailsOrder.saleDate)}
              </li>
              <li data-testid={ allDataIds('deliveryStatus') }>
                {detailsOrder.status}
              </li>
              <li>
                <button
                  type="button"
                  data-testid={ allDataIds('preparing') }
                  disabled={
                    detailsOrder.status !== 'Pendente' ? 'disabled' : ''
                  }
                  onClick={ changeStatusOrder }
                >
                  Preparar Pedido
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-testid={ allDataIds('dispatch') }
                  disabled={
                    detailsOrder.status !== 'Preparando' ? 'disabled' : ''
                  }
                  onClick={ changeStatusOrder }
                >
                  Saiu para Entrega
                </button>
              </li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                  <th>Valor Unitário</th>
                  <th>Sub-total</th>
                </tr>
              </thead>
              <tbody>
                {detailsOrder.product.map((product, index) => {
                  const { id: idProduct, name: nameProduct, price } = product;
                  const {
                    salesProduct: { quantity },
                  } = product;
                  const indexMap = index + 1;
                  totalOrder += price * quantity;

                  return (
                    <tr key={ idProduct }>
                      <td data-testid={ allDataIds('item', indexMap) }>
                        {indexMap}
                      </td>
                      <td data-testid={ allDataIds('name', indexMap) }>
                        {nameProduct}
                      </td>
                      <td data-testid={ allDataIds('quantity', indexMap) }>
                        {quantity}
                      </td>
                      <td data-testid={ allDataIds('price', indexMap) }>
                        {formatPrice(price)}
                      </td>
                      <td data-testid={ allDataIds('subTotal', indexMap) }>
                        {formatPrice(price * quantity)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div data-testid={ allDataIds('total') }>
              {`Total: ${formatPrice(totalOrder)}`}
            </div>
          </>
        )}
      </div>
    </>
  );
}

SellerDetails.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default SellerDetails;
