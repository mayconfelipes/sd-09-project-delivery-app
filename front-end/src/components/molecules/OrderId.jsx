import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms';
import { productNamePropTypes } from '../../utils/propTypes';

const STRING_PADDING = 4;

const OrderId = ({ className, id, testid }) => {
  const displayedId = `${id}`.padStart(STRING_PADDING, '0');

  return (
    <Label className={ className }>
      <div>Pedido</div>
      <div>{ displayedId }</div>
      <span data-testid={ testid }>{ id }</span>
    </Label>
  );
};

export default styled(OrderId)`
  background-color: white;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  div:nth-of-type(2) {
    font-size: 1.5rem;
  }

  span {
    display: none;
  }
`;

OrderId.propTypes = productNamePropTypes;
