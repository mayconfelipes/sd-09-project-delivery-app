import React from 'react';

import TableRow from './TableRow';

const OrderLIst = () => {
  const tableHeaders = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitario',
    'Sub-total',
    'Remover item',
  ];

  const teste = [{
    Descricao: 'cerveja skol',
    Quantidade: 5,
    ValorUnitario: 3,
    SubTotal: 15,
  }];

  return (
    <div>
      <h3>Finalizar pedidos</h3>
      <div className="order-list-container">
        <table className="order-table">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => <th key={ index }>{ header }</th>)}
            </tr>
          </thead>
          <tbody>
            {teste.map((item, index) => <TableRow key={ index } item={ item } />)}
          </tbody>
        </table>
        <span className="order-price">Total: R$ 50, 00</span>
      </div>
    </div>
  );
};

export default OrderLIst;
