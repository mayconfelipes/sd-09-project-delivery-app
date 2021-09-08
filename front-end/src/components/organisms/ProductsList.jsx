import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../atoms';
import ProductCard from './ProductCard';
import generateKey from '../../utils/uniqueKeyGenerator';
import { productsArrayPropTypes } from '../../utils/propTypes';

const ProductsList = ({ className, products }) => (
  <Wrapper className={ className }>
    { products.map(
      (product) => <ProductCard key={ generateKey() } product={ product } />,
    )}
  </Wrapper>
);

export default styled(ProductsList)`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
`;

ProductsList.propTypes = productsArrayPropTypes;
