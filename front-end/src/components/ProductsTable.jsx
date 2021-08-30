import React from 'react';
import PropTypes from 'prop-types';
// import dataTestIds from '../utils/dataTestIds';

function ProductsTable({ listItems, testIds }) {
  const rows = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

  return (
    <table>
      <thead />
      <tbody>
        <tr>
          { rows.map((item, index) => (
            <td key={ index }>{ item }</td>
          )) }
        </tr>
        { listItems.map((item, index) => (
          <tr key={ index }>
            <td data-testid={ `${testIds[0]}${index}` }>{ index + 1 }</td>
            <td data-testid={ `${testIds[1]}${index}` }>{ item.name }</td>
            <td data-testid={ `${testIds[2]}${index}` }>
              { item.salesProducts.quantity }
            </td>
            <td data-testid={ `${testIds[3]}${index}` }>{ `R$${item.price}` }</td>
            <td data-testid={ `${testIds[4]}${index}` }>
              { `R$${(item.price * item.salesProducts.quantity).toFixed(2)}` }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductsTable.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  testIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductsTable;
