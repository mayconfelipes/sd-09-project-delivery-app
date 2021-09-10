import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Input, Wrapper } from '../atoms';
import { productCardPropTypes } from '../../utils/propTypes';
import CheckoutSelect from '../molecules/CheckoutSelect';
import useAuthFormInfo from '../../hooks/useAuthFormInfo';
import { useCustomRoleDataContext, useUserDataContext } from '../../context/contexts';
import requestApi from '../../services/api';
import testIds from '../../utils/testIds';

const InputAddress = styled(Input)``;

const InputNumber = styled(Input)``;

const FieldsWrapper = styled(Wrapper)``;

const CheckoutForm = ({ className }) => {
  const fields = { fields: ['sellerId', 'deliveryAddress', 'deliveryNumber'] };
  const { cart, total: totalPrice } = useCustomRoleDataContext();
  const { token } = useUserDataContext();
  const { authInfo, handleFieldsChange } = useAuthFormInfo(fields, true);
  const { sellerId, deliveryAddress, deliveryNumber } = authInfo;
  const history = useHistory();

  const finishOrder = async () => {
    const data = {
      sellerId: Number(sellerId),
      deliveryAddress,
      deliveryNumber,
      totalPrice,
      cart: Object.values(cart),
    };
    const requestData = { method: 'post', data, endpoint: 'customer/checkout', token };
    const { data: { order: { id } } } = await requestApi(requestData);
    history.push(`/customer/order/${id}`);
  };

  return (
    <Wrapper className={ className }>
      <FieldsWrapper>
        <CheckoutSelect
          value={ sellerId }
          onChange={ handleFieldsChange }
        />
        <InputAddress
          name="deliveryAddress"
          value={ deliveryAddress }
          onChange={ handleFieldsChange }
          data-testid={ testIds.id30 }
        />
        <InputNumber
          name="deliveryNumber"
          value={ deliveryNumber }
          onChange={ handleFieldsChange }
          data-testid={ testIds.id31 }
        />
      </FieldsWrapper>
      <Button onClick={ finishOrder } data-testid={ testIds.id32 } primary>
        Finalizar pedido
      </Button>
    </Wrapper>
  );
};

export default styled(CheckoutForm)`
  ${Button} {
    text-transform: uppercase;
  }
`;

CheckoutForm.propTypes = productCardPropTypes;
