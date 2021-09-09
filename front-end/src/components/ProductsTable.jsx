import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsTable({ venda, prefix }) {
  console.log(venda);

  return (
    <table>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        { venda && venda.products ? venda.products.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={ `${prefix}table-item-number-${index + 1}` }
            >
              { index + 1 }
            </td>
            <td
              data-testid={ `${prefix}table-name-${index + 1}` }
            >
              { product.name }
            </td>
            <td
              data-testid={ `${prefix}table-quantity-${index + 1}` }
            >
              { product.quantity }
            </td>
            <td
              data-testid={ `${prefix}table-sub-total-${index + 1}` }
            >
              { `R$ ${product.price}` }
            </td>
            <td
              data-testid={ `${prefix}total-price-${index + 1}` }
            >
              { `R$ ${(parseFloat(product.price) * parseInt(product.quantity, 10))
                .toFixed(2)}` }
            </td>
          </tr>)) : null }
      </tbody>
    </table>
  );
}

ProductsTable.propTypes = {
  prefix: PropTypes.string.isRequired,
  venda: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.objectOf(({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      urlImage: PropTypes.string.isRequired,
    }))),
  }).isRequired };
