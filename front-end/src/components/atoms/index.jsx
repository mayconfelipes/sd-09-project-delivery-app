import styled from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import { getThemeColor, setIfActive } from '../../styles/utils';
import { navLinkThemes } from '../../styles/componentThemes';

export const AppTitle = styled.h1``;

export const Button = styled.button``;

export const Container = styled.div``;

export const Image = styled.img``;

export const Input = styled.input``;

export const Label = styled.label``;

export const Link = styled(RouterLink)`
  ${(props) => console.log(props)}
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: ${getThemeColor('light')}
  ${setIfActive(navLinkThemes)}
`;

export const NavWrapper = styled.nav``;

export const Wrapper = styled.div``;
