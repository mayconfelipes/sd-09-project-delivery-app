import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { NavLink, NavWrapper } from '../atoms';
import generateKey from '../../utils/uniqueKeyGenerator';

const NavGroup = () => {
  const { pageItems: { navItems } } = useContext(AppContext);

  return (
    <NavWrapper>
      { navItems.map(({ text, testId, path }) => (
        <NavLink to={ path } data-testid={ testId } key={ generateKey() }>
          { text }
        </NavLink>
      )) }
    </NavWrapper>
  );
};

export default NavGroup;
