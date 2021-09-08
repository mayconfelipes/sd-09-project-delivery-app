import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../atoms';
import NavGroup from '../molecules/NavGroup';
import UserGroup from '../molecules/UserGroup';
import { onlyClassNamePropTypes } from '../../utils/propTypes';

const NavBar = ({ className }) => (
  <Wrapper className={ className }>
    <NavGroup />
    <UserGroup />
  </Wrapper>
);

export default styled(NavBar)`
  background-color: ${(props) => props.theme.colors.primary};
  display: grid;
  grid-template-columns: auto 25%;
  height: 10vh;
  width: 100vw;
  top: 0;
  position: fixed;
  z-index: 1;
`;

NavBar.propTypes = onlyClassNamePropTypes;
