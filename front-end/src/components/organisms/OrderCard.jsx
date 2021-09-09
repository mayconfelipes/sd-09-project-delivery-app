import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Wrapper } from '../atoms';
import testIds from '../../utils/testIds';
import { productCardPropTypes } from '../../utils/propTypes';
import Price from '../molecules/Price';
import Date from '../molecules/Date';
import OrderStatus from '../molecules/OrderStatus';
import OrderId from '../molecules/OrderId';

const PriceDateWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px;
`;

const OrderCard = ({ className, order }) => {
  const { id, totalPrice, saleDate, status } = order;
  const history = useHistory();
  const goToOrderDetails = useCallback(
    () => history.push(`/customer/orders/${id}`),
    [],
  );

  return (
    <Wrapper className={ className } onClick={ goToOrderDetails }>
      <OrderId id={ id } testid={ testIds.id33(id) } />
      <OrderStatus status={ status } testid={ testIds.id34(id) } />
      <PriceDateWrapper>
        <Date date={ saleDate } testid={ testIds.id35(id) } />
        <Price
          price={ totalPrice }
          testid={ `customer_orders__element-card-price-${id}` }
        />
      </PriceDateWrapper>
    </Wrapper>
  );
};

export default styled(OrderCard)`
  background-color: #eaf1ef;
  padding: 2px 12px 2px 2px;
  box-shadow: 0 3px 5px #00000040;
  display: grid;
  grid-template-columns: 20% 40% 40%;
  grid-gap: 0 5px;
  cursor: pointer;

  ${Price}, ${Date} {
    background: #F2FFFCBF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    width: 100%;
    height: 45%;
    font-size: 1.5rem;
  }
`;

OrderCard.propTypes = productCardPropTypes;
