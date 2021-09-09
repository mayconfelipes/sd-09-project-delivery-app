import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { productNamePropTypes } from '../../utils/propTypes';

const Price = ({ className, price, testid }) => {
  const displayedPrice = price.replace('.', ',');

  return (
    <Label className={ className }>
      {'R$ '}
      <span data-testid={ testid }>
        { displayedPrice }
      </span>
    </Label>
  );
};

export default styled(Price)`
  color: ${getThemeColor('dark')};
`;

Price.propTypes = productNamePropTypes;
