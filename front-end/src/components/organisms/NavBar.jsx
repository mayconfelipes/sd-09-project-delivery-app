import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Wrapper } from '../atoms';
import NavGroup from '../molecules/NavGroup';

const NavBar = ({ className }) => (
  <Wrapper className={ className }>
    <NavGroup />
  </Wrapper>
);

export default styled(NavBar)`
  background-color: ${(props) => props.theme.colors.primary};
`;

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
};
