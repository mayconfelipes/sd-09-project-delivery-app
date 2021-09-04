// import PropTypes from 'prop-types';
import React, { useState } from 'react';

function TableProducts() {
  const [totalPrice, setTotalPrice] = useState(
    Number(localStorage.getItem('totalPrice')),
  );
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cart')));

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

  const productsTbobyRender = () => products.map((product, index) => (
    <tr
      style={ { maxWidth: '100vw' } }
      data-testid={ `element-order-table-name-${index}` }
      key={ `${product.id}` }
    >
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index + 1}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {product.name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        {product.quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {product.unitPrice}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {Number(product.unitPrice * product.quantity).toFixed(2)}
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
    </tr>
  ));

  const cartTableRender = () => (
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
      <tbody style={ { maxWidth: '100vw' } }>{ productsTbobyRender() }</tbody>
    </table>
  );

  return (
    <>
      { cartTableRender() }
      <h1 className="tp" data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${Number(totalPrice).toFixed(2)}`}
      </h1>
      { localStorage.setItem('cart', JSON.stringify(products)) }
      { localStorage.setItem('totalPrice', totalPrice) }
    </>
  );
}

/* TableProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      subTotal: PropTypes.number,
    }),
  ).isRequired,
}; */

export default TableProducts;
