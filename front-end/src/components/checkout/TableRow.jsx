import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ item }) => {
  const { Descricao, Quantidade, ValorUnitario, SubTotal } = item;
  return (
    <tr>
      <td>1</td>
      <td>{ Descricao }</td>
      <td>{ Quantidade }</td>
      <td>{ ValorUnitario }</td>
      <td>{ SubTotal }</td>
      <td><button type="button">Remover</button></td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.shape({
    Descricao: PropTypes.string,
    Quantidade: PropTypes.number,
    ValorUnitario: PropTypes.number,
    SubTotal: PropTypes.number,
  }).isRequired,
};

export default TableRow;
