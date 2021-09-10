import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import NavBar from '../Components/NavBar';
import api from '../services/api';
import dateFormat from '../services/dateFormat';

function OrderDetails() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [sale, setSale] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const { id: sellerId } = JSON.parse(localStorage.getItem('user'));
  const productId = useParams().id;

  useEffect(() => {
    api.get(`sale/bySellerId/${sellerId}`).then((res) => setSale(res.data.sale[0]));
    api.get(`sale/${productId}`).then((res) => {
      setProducts(res.data.product);
      setTotalPrice(res.data.totalPrice);
    });
  }, [sellerId, productId]);

  const changeStatusOnClick = async ({ target }) => {
    await api.put(`sale/${sale.id}`, { status: target.value }, {
      headers: {
        Authorization: user.token,
      },
    }).then((res) => setSale(res.data.sale));
  };

  const renderTableSales = () => (
    <tr>
      <th data-testid="seller_order_details__element-order-details-label-order-id">
        {`Pedido 00${sale.id}`}
      </th>
      <th data-testid="seller_order_details__element-order-details-label-order-date">
        { dateFormat(sale.saleDate) }
      </th>
      <th data-testid="seller_order_details__element-order-details-label-delivery-status">
        {sale.status}
      </th>
      <th>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ sale.status !== 'Pendente' }
          value="Preparando"
          onClick={ changeStatusOnClick }
        >
          Preparar Pedido
        </button>
      </th>
      <th>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ sale.status !== 'Preparando' }
          value="Em Trânsito"
          onClick={ changeStatusOnClick }
        >
          Saiu para entrega
        </button>
      </th>
    </tr>
  );

  const cartTableRender = () => (
    <>
      <table style={ { maxWidth: '100vw' } }>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody style={ { maxWidth: '100vw' } }>
          { products.map((product, index) => (
            <tr
              style={ { maxWidth: '100vw' } }
              data-testid={ `element-order-table-name-${index}` }
              key={ `${product.id}` }
            >
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                {product.SaleProduct.quantity}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                {Number(product.price).toFixed(2).toString().replace(/\./, ',')}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                {Number(product.price * product.SaleProduct.quantity)
                  .toFixed(2).toString()
                  .replace(/\./, ',')}
              </td>
            </tr>)) }
        </tbody>
      </table>
      <br />
      <div style={ { textAlign: 'center' } }>
        <h2>Total R$</h2>
        <h3 data-testid="seller_order_details__element-order-total-price">
          { Number(totalPrice).toFixed(2).toString().replace(/\./, ',') }
        </h3>
      </div>
    </>
  );

  return (
    <>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <table style={ { maxWidth: '100vw' } }>
        <thead>{ renderTableSales() }</thead>
      </table>
      { cartTableRender() }
    </>
  );
}

export default OrderDetails;
