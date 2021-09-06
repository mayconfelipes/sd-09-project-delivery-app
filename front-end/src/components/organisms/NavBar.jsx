import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Wrapper } from '../atoms';
import NavGroup from '../molecules/NavGroup';
import UserGroup from '../molecules/UserGroup';

const NavBar = ({ className }) => (
  <Wrapper className={ className }>
    <NavGroup />
    <UserGroup />
  </Wrapper>
);

export default styled(NavBar)`
  /* justify-content: stretch; */
  background-color: ${(props) => props.theme.colors.primary};
  display: grid;
  grid-template-columns: auto 25%;
  height: 10vh;
`;

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
};
