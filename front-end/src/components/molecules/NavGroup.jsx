import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink, NavWrapper } from '../atoms';
import generateKey from '../../utils/uniqueKeyGenerator';
import { useUserDataContext } from '../../context/contexts';
import getPageItemsByRole from '../../utils/getPageItemsByRole';
import { onlyClassNamePropTypes } from '../../utils/propTypes';

const NavGroup = ({ className }) => {
  const { role } = useUserDataContext();
  const { navItems } = getPageItemsByRole(role);
  const { pathname } = useLocation();

  return (
    <NavWrapper className={ className }>
      { navItems.map(({ text, testId, path }) => (
        <NavLink
          to={ path }
          data-testid={ testId }
          key={ generateKey() }
          active={ pathname.includes(path) }
        >
          { text }
        </NavLink>
      )) }
    </NavWrapper>
  );
};

export default styled(NavGroup)`
  display: grid;
  grid-template-columns: 25% 25%;
`;

NavGroup.propTypes = onlyClassNamePropTypes;
