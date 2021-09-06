import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppContext } from '../../context';
import { NavLink, NavWrapper } from '../atoms';
import generateKey from '../../utils/uniqueKeyGenerator';

const NavGroup = ({ className }) => {
  const { pageItems: { navItems } } = useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <NavWrapper className={ className }>
      { navItems.map(({ text, testId, path }) => (
        <NavLink
          to={ path }
          data-testid={ testId }
          key={ generateKey() }
          active={ pathname === path }
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

NavGroup.propTypes = {
  className: PropTypes.string.isRequired,
};
