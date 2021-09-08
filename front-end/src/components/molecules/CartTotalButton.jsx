import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Button } from '../atoms';
import { onlyClassNamePropTypes } from '../../utils/propTypes';
import { useCustomRoleDataContext } from '../../context/contexts';
import testIds from '../../utils/testIds';
import paths from '../../Routes/paths';

const CartTotalButton = ({ className }) => {
  const { total } = useCustomRoleDataContext();
  const isDisabled = total === 0;
  const history = useHistory();
  const displayedTotal = total.toFixed(2).replace('.', ',');
  const goToCheckout = useCallback(
    () => history.push(paths.customer.checkout),
    [],
  );

  return (
    <Button
      onClick={ goToCheckout }
      data-testid={ testIds.id21 }
      className={ className }
      primary
      disabled={ isDisabled }
    >
      {'Ver Carrinho: R$ '}
      <span data-testid={ testIds.id79 }>{ displayedTotal }</span>
    </Button>
  );
};

export default styled(CartTotalButton)``;

CartTotalButton.propTypes = onlyClassNamePropTypes;
