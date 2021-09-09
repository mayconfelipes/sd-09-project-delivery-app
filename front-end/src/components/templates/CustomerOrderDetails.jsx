import React from 'react';
import styled from 'styled-components';
import { Main } from '../atoms';
import NavBar from '../organisms/NavBar';
import { productsArrayPropTypes } from '../../utils/propTypes';
import CartTotalButton from '../molecules/CartTotalButton';
import OrderTable from '../organisms/OrderTable';
import OrderStatusBar from '../organisms/OrderStatusBar';

const CustomerOrderDetails = ({ className, order }) => {
  const { id, seller, saleDate, status, products = [] } = order;
  return (
    <>
      <NavBar />
      <Main className={ className }>
        <OrderStatusBar { ...{ id, seller, saleDate, status } } />
        <OrderTable { ...{ products } } />
      </Main>
    </>
  );
};

export default styled(CustomerOrderDetails)`
  margin: 10vh 0 10vh 0;
  padding: 0 0 100vh 0;
  display: grid;
  grid-template-rows: 10vh 90vh;
  padding: 3% 8%;
  /* grid-gap: 10px; */
  /* background-color: red; */
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

CustomerOrderDetails.propTypes = productsArrayPropTypes;
