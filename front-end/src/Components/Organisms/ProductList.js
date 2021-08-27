import React from 'react';
import PropTypes from 'prop-types';
import { ProductListElement } from '../styles';
import ProductLine from '../Molecules/ProductLine';

function ProductList({ children }) {
  return (
    <ProductListElement>
      <ProductLine>titles</ProductLine>
      <ProductLine>{children}</ProductLine>
      <ProductLine>{children}</ProductLine>
    </ProductListElement>
  );
}

ProductList.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default ProductList;
