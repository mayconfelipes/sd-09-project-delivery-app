// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function TableProducts() {
  const [products, setProducts] = useState([]);
  const totalPriceStorage = Number(localStorage.getItem('totalPrice'));

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('cart')));
  }, [setProducts]);

  const removeProductOnClick = (id) => {
    setProducts(products.filter((product) => id !== product.id));
    products.forEach((prod) => {
      localStorage.setItem('totalPrice',
        totalPriceStorage - (prod.unitPrice * prod.quantity));
    });
    localStorage.setItem('cart', products);
  };

  const productsTbobyRender = () => products.map((product, index) => (
    <tr data-testid={ `element-order-table-name-${index}` } key={ `${product.id}` }>
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
        {product.unitPrice * product.quantity}
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
    <table>
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
      <tbody>{ productsTbobyRender() }</tbody>
    </table>
  );

  return (
    <>
      { cartTableRender() }
      <h1 className="tp" data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${totalPriceStorage}`}
      </h1>
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
