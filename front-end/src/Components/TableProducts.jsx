import PropTypes from 'prop-types';
import React, { useState } from 'react';

function TableProducts({ fetchSales }) {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cart')));
  const [totalPrice, setTotalPrice] = useState(
    Number(localStorage.getItem('totalPrice')),
  );
  const user = JSON.parse(localStorage.getItem('user'));
  const [salesDetails] = useState({
    userId: user.id,
    sellerId: 2,
    deliveryAddress: 'rua tal',
    deliveryNumber: '3',
    cart: products,
  });

  const removeProductOnClick = (id) => {
    setProducts(products.filter((product) => id !== product.id));
    products.forEach((prod) => {
      if (id === prod.id) {
        setTotalPrice(
          Number(totalPrice - Number(prod.unitPrice * prod.quantity)).toFixed(2),
        );
      }
    });
  };

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
            <th>Remover item</th>
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
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {Number(product.unitPrice).toFixed(2).toString().replace(/\./, ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {Number(product.unitPrice * product.quantity).toFixed(2).toString()
                  .replace(/\./, ',')}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ () => removeProductOnClick(product.id) }
                >
                  Remover
                </button>
              </td>
            </tr>)) }
        </tbody>
      </table>
      <h2>Total</h2>
      <h3 data-testid="customer_checkout__element-order-total-price">
        { Number(totalPrice).toFixed(2).toString().replace(/\./, ',') }
      </h3>
    </>
  );

  const detailsAndAdressRender = () => (
    <table>
      <thead>
        <tr>
          <th>P. Vendedora Responsável</th>
          <th>Endereço</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select
              data-testid="customer_checkout__select-seller"
            >
              Cicrana
            </select>
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              value="rua tal"
            />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              value="166"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <>
      { cartTableRender() }
      <hr />
      <h3>Detalhes do pedido para entrega</h3>
      { detailsAndAdressRender() }
      <button
        className="checkoutBtn"
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ () => {
          fetchSales(salesDetails);
        } }
      >
        FINALIZAR PEDIDO
      </button>
    </>
  );
}

TableProducts.propTypes = {
  fetchSales: PropTypes.func,
}.isRequired;

export default TableProducts;
