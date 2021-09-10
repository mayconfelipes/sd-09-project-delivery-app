import React from 'react';
import styled from 'styled-components';
import { Input, Wrapper } from '../atoms';
// import testIds from '../../utils/testIds';
import { productCardPropTypes } from '../../utils/propTypes';
import CheckoutSelect from '../molecules/CheckoutSelect';
import useAuthFormInfo from '../../hooks/useAuthFormInfo';

const InputAddress = styled(Input)``;

const InputNumber = styled(Input)``;

const CheckoutForm = ({ className }) => {
  const fields = { fields: ['sellerId', 'deliveryAddress', 'deliveryNumber'] };
  const { authInfo, handleFieldsChange } = useAuthFormInfo(fields, true);
  const { sellerId, deliveryAddress, deliveryNumber } = authInfo;
  console.log(authInfo);
  // { sellerId, deliveryAddress, deliveryNumber, totalPrice, cart }
  return (
    <Wrapper className={ className }>
      <CheckoutSelect
        name="sellerId"
        value={ sellerId }
        onChange={ handleFieldsChange }
      />
      <InputAddress
        name="deliveryAddress"
        value={ deliveryAddress }
        onChange={ handleFieldsChange }
      />
      <InputNumber
        name="deliveryNumber"
        value={ deliveryNumber }
        onChange={ handleFieldsChange }
      />
    </Wrapper>
  );
};

export default styled(CheckoutForm)``;

CheckoutForm.propTypes = productCardPropTypes;
