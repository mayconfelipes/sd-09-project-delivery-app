import React from 'react';
import styled from 'styled-components';
import { Cell, Row } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { productNamePropTypes } from '../../utils/propTypes';
import roundDecimals from '../../utils/roundDecimals';

const ItemNumber = styled(Cell)`
  text-align: center;
`;

const Name = styled(Cell)``;

const Quantity = styled(Cell)`
  text-align: center;
`;

const UnitPrice = styled(Cell)`
  text-align: center;
`;

const SubTotal = styled(Cell)`
  text-align: center;
`;

const STRING_PADDING = 4;

const OrderRow = ({ className, product, index, testid }) => {
  const { name, price, salesProduct: { quantity } } = product;
  const subTotal = roundDecimals(quantity * Number(price));
  const paddedSubTotal = `${subTotal}`.padEnd(STRING_PADDING, '0');
  const displayedSubTotal = paddedSubTotal.replace('.', ',');
  const displayedPrice = price.replace('.', ',');

  return (
    <Row className={ className } data-testid={ testid }>
      <ItemNumber>{ index }</ItemNumber>
      <Name>{ name }</Name>
      <Quantity>{ quantity }</Quantity>
      <UnitPrice>
        { 'R$ ' }
        { displayedPrice }
      </UnitPrice>
      <SubTotal>
        { 'R$ ' }
        { displayedSubTotal }
      </SubTotal>
    </Row>
  );
};

export default styled(OrderRow)`
  color: ${getThemeColor('dark')};
`;

OrderRow.propTypes = productNamePropTypes;
