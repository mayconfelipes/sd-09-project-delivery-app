import React from 'react';
import styled from 'styled-components';
import { Button, Input, Wrapper } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import testIds from '../../utils/testIds';
import useProductQuantity from '../../hooks/useProductQuantity';
import { productCounterPropTypes } from '../../utils/propTypes';

const ProductCounter = React.memo(({ className, product }) => {
  const { id } = product;

  const {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    editQuantity,
  } = useProductQuantity(product);

  return (
    <Wrapper className={ className }>
      <Button
        data-testid={ testIds.id19(id) }
        onClick={ decreaseQuantity }
        primary
      >
        -
      </Button>
      <Input
        data-testid={ testIds.id20(id) }
        type="text"
        value={ quantity }
        onChange={ ({ target: { value } }) => editQuantity(Number(value)) }
      />
      <Button
        data-testid={ testIds.id18(id) }
        onClick={ increaseQuantity }
        primary
      >
        +
      </Button>
    </Wrapper>
  );
});

export default styled(ProductCounter)`
  display: flex;
  overflow: hidden;

  ${Button} {
    border-radius: 5px 0 0 5px;
    display: flex;
    font-size: 1.3rem;
    font-weight: 600;
    height: 30px;
    justify-content: center;
    align-items: center;
    line-height: 1rem;
    width: 30px;
    :last-child {
      border-radius: 0 5px 5px 0;
    }
  }

  ${Input} {
    color: ${getThemeColor('textLight')};
    font-size: .8rem;
    text-align: center;
    width: 30px;
  }
`;

ProductCounter.propTypes = productCounterPropTypes;
