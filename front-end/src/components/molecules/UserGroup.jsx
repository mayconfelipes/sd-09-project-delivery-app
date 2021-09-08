import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Label, Link, Wrapper } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import testIds from '../../utils/testIds';
import { removeCartData, removeUserData } from '../../utils/storage';
import paths from '../../Routes/paths';
import { useAuthActionContext, useUserDataContext } from '../../context/contexts';
import { onlyClassNamePropTypes } from '../../utils/propTypes';

const UserGroup = ({ className }) => {
  const setAuthentication = useAuthActionContext();
  const { name } = useUserDataContext();

  const logout = useCallback(
    () => {
      removeUserData();
      removeCartData();
      setAuthentication(false);
    },
    [],
  );

  return (
    <Wrapper className={ className }>
      <Label data-testid={ testIds.id13 }>
        { name }
      </Label>
      <Link
        to={ paths.home }
        onClick={ logout }
        data-testid={ testIds.id14 }
      >
        Sair
      </Link>
    </Wrapper>
  );
};

export default styled(UserGroup)`
  color: ${getThemeColor('light')};
  display: grid;
  grid-template-columns: auto 30%;

  ${Label} {
    background-color: ${getThemeColor('tertiary')};
    font-weight: 400;
    display: inline-grid;
    place-items: center;
    padding: 0 auto;
    text-align: center;
  }

  ${Link} {
    display: inline-grid;
    place-items: center;
    color: ${getThemeColor('light')};
    background-color: ${getThemeColor('quaternary')};
  }
`;

UserGroup.propTypes = onlyClassNamePropTypes;
