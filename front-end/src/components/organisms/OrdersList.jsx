import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../atoms';
import generateKey from '../../utils/uniqueKeyGenerator';
import { productsArrayPropTypes } from '../../utils/propTypes';
import OrderCard from './OrderCard';

const OrdersList = ({ className, products: orders }) => (
  <Wrapper className={ className }>
    { orders.map(
      (order) => <OrderCard key={ generateKey() } order={ order } />,
    )}
  </Wrapper>
);

export default styled(OrdersList)`
  display: grid;
  gap: 40px 25px;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
`;

OrdersList.propTypes = productsArrayPropTypes;
