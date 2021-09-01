import React, { useContext } from 'react';
// import {
//   Table, TableBody, TableCell,
//   TableContainer, TableHead, TableRow,
//   TextField, Grid, Button, Paper
// } from '@material-ui/core';
import context from '../../context';

const headers = [
  'Item', 'Descrição', 'Quantidade',
  'Valor Unitário', 'Sub-total', 'Remover Item',
];

const OrderTable = () => {
  const { cart } = useContext(context);
  // const { cart, setCart } = useContext(context);
  const { products } = cart;
  console.log(products);
  return (
    <table>
      <thead>
        { headers.map((item) => (<td key={ item }>{ item }</td>)) }
      </thead>
      <tbody>
        {
          products.forEach((product, index) => (
            <tr key={ `Line - ${index}` }>
              {
                product.map((elem) => (
                  <td key={ elem }>{ elem }</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default OrderTable;
