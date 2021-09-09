import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../atoms';
import { onlyClassNamePropTypes } from '../../utils/propTypes';
import OrderStatus from '../molecules/OrderStatus';

const OrderStatusBar = ({ className, id, seller, saleDate, status }) => (
  <Wrapper className={ className }>
    <OrderStatus status={ status } data-testid="unset" />
    <span id={ id } seller={ seller } saleDate={ saleDate }>aaaa</span>
  </Wrapper>
);

export default styled(OrderStatusBar)`
  display: grid;
  grid-template-columns: auto 25%;
  z-index: 1;
`;

OrderStatusBar.propTypes = onlyClassNamePropTypes;
