import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import { getOrderById } from '../../services/fetchApi';
import formatPrice from '../../services/formatPrice';
import formatDate from '../../services/formatDate';
import DEFAULT_ORDER from '../customerOrderDetails/default';

const dataTestIdLabel = 'seller_order_details__element-order-details-label';
const dataTestIdTable = 'seller_order_details__element-order-table';
const dataTestIdTotal = 'seller_order_details__element-order';
const dataTestIdButton = 'seller_order_details__button';

const SellerOrderDetails = () => {
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const { sale, products } = order;
  const [loading, setLoading] = useState(true);
  const [controlButton, setControlButton] = useState(false);
  const {
    id: saleId, sale_date: saleDate, status, total_price: totalPrice,
  } = sale;
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PEDIDOS *customer_products__element-navbar-link-orders*/seller/orders',
  ];
  const getOrder = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const pathName = window.location.pathname;
    const id = pathName.split('/');
    const orderDetail = await getOrderById(token, id[3]);
    setOrder(orderDetail);
    setLoading(false);
  };
  const headersTable = ['Item', 'Descrição', 'Quantidade', 'Valor Unitario', 'Sub-total'];

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      {
        loading
          ? <h1>Bora</h1>
          : (
            <div>
              <div>
                <span
                  data-testid={ `${dataTestIdLabel}-order-id` }
                >
                  { `Número pedido: ${saleId}` }
                </span>
                <span
                  data-testid={ `${dataTestIdLabel}-order-date` }
                >
                  { formatDate(saleDate.split('T')[0]) }
                </span>
                <span
                  data-testid={ `${dataTestIdLabel}-delivery-status` }
                >
                  { status }
                </span>
                <button
                  type="button"
                  data-testid={ `${dataTestIdButton}-preparing-check` }
                  onClick={ () => setControlButton(!controlButton) }
                  disabled={ controlButton }
                >
                  PREPARAR PEDIDO
                </button>
                <button
                  type="button"
                  data-testid={ `${dataTestIdButton}-dispatch-check` }
                  onClick={ () => setControlButton(!controlButton) }
                  disabled={ !controlButton }
                >
                  SAIU PARA ENTREGA
                </button>
              </div>
              <table>
                <thead>
                  <tr>
                    { headersTable.map((element) => (
                      <th key={ element }>{element}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((
                      { res: { name: productName, price }, quantity }, index,
                    ) => (
                      <tr key={ index }>
                        <td
                          data-testid={ `${dataTestIdTable}-item-number-${index}` }
                        >
                          {index + 1}
                        </td>
                        <td
                          data-testid={ `${dataTestIdTable}-name-${index}` }
                        >
                          {productName}
                        </td>
                        <td
                          data-testid={ `${dataTestIdTable}-quantity-${index}` }
                        >
                          {quantity}
                        </td>
                        <td
                          data-testid={ `${dataTestIdTable}-sub-total-${index}` }
                        >
                          {formatPrice(Number(price))}
                        </td>
                        <td
                          data-testid={ `${dataTestIdTotal}-total-price-${index}` }
                        >
                          {formatPrice(Number(price * quantity))}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <p
                data-testid="seller_order_details__element-order-total-price"
              >
                { formatPrice(Number(totalPrice)) }
              </p>
            </div>
          )
      }
    </div>
  );
};

export default SellerOrderDetails;
