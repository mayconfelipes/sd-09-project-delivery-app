import React from 'react';
import PropTypes from 'prop-types';
import SellerOrderDetailsItem from './SellerOrderDetailsItem';

function SellerOrderDetailsTable({ products }) {
  const tableHead = () => (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Subtotal</th>
      </tr>
    </thead>
  );

  return (
    <table>
      <colgroup>
        <col width="40px" />
        <col />
        <col width="120px" />
        <col width="120px" />
        <col width="120px" />
      </colgroup>
      { tableHead() }
      <tbody>
        { products.map((product, index) => (
          <SellerOrderDetailsItem product={ product } index={ index } key={ index } />)) }
      </tbody>
    </table>
  );
}

SellerOrderDetailsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      urlImage: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SellerOrderDetailsTable;
