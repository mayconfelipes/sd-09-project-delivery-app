import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms';
import { getStatusColor, getThemeColor } from '../../styles/utils';
import { productNamePropTypes } from '../../utils/propTypes';

const OrderStatus = ({ className, status, testid }) => (
  <Label className={ className } data-testid={ testid }>
    { status }
  </Label>
);

export default styled(OrderStatus)`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${getStatusColor};
  color: ${getThemeColor('dark')};
  font-size: 1.5rem;
`;

OrderStatus.propTypes = productNamePropTypes;
