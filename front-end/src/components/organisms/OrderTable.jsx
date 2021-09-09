import React from 'react';
import styled from 'styled-components';
import { Row, Table, TableHeader } from '../atoms';
import generateKey from '../../utils/uniqueKeyGenerator';
import { productsArrayPropTypes } from '../../utils/propTypes';
import OrderRow from '../molecules/OrderRow';

const OrderTable = ({ className, products = [] }) => (
  <Table className={ className }>
    <Row>
      <TableHeader>Item</TableHeader>
      <TableHeader>Descrição</TableHeader>
      <TableHeader>Quantidade</TableHeader>
      <TableHeader>Valor Unitário</TableHeader>
      <TableHeader>Sub-total</TableHeader>
    </Row>
    { products.map((product, index) => (
      <OrderRow product={ product } index={ index } key={ generateKey() } />
    )) }
  </Table>
);

export default styled(OrderTable)`
  ${TableHeader} {
    font-weight: 400;
    font-size: .9rem;
  }
`;

OrderTable.propTypes = productsArrayPropTypes;
