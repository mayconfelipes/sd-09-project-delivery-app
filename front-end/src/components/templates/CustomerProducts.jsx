import React from 'react';
import styled from 'styled-components';
import { Main } from '../atoms';
import ProductsList from '../organisms/ProductsList';
import NavBar from '../organisms/NavBar';
import { productsArrayPropTypes } from '../../utils/propTypes';
import CartTotalButton from '../molecules/CartTotalButton';

const CustomerProducts = ({ className, products }) => (
  <>
    <NavBar />
    <Main className={ className }>
      <ProductsList products={ products } />
      <CartTotalButton />
    </Main>
  </>
);

export default styled(CustomerProducts)`
  margin: 10vh 0 10vh 0;
  padding: 0 0 100vh 0;
  display: grid;
  grid-template-rows: 10vh 90vh;
  padding: 3% 8%;
  height: 100%;

  ${CartTotalButton} {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;

CustomerProducts.propTypes = productsArrayPropTypes;
