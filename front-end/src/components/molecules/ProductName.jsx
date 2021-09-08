import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { productNamePropTypes } from '../../utils/propTypes';

const ProductName = ({ className, name, testid }) => (
  <Wrapper className={ className } data-testid={ testid }>
    { name }
  </Wrapper>
);

export default styled(ProductName)`
  color: ${getThemeColor('dark')};
`;

ProductName.propTypes = productNamePropTypes;
