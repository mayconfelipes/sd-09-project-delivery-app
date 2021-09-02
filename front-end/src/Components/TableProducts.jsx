import PropTypes from 'prop-types';
import React from 'react';

function TableProducts({ products }) {
  const removeProductOnClick = (id) => {
    setProducts(products.filter((product) => id !== product.id));
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
        Quantidade carrinho
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {product.price}
      </td>
      <td data-testid={ `checkout__element-order-table-sub-total-${index}` }>
        Sub total carrinho
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
    </>
  );
}

TableProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      subTotal: PropTypes.number,
    }),
  ).isRequired,
};

export default TableProducts;
