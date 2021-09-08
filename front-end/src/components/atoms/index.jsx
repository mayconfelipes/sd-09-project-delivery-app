import styled from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import { getThemeColor, setIfActive, setThemeFor } from '../../styles/utils';
import { buttonThemes, navLinkThemes } from '../../styles/componentThemes';

export const AppTitle = styled.h1``;

export const Button = styled.button`
  border: 0;
  ${setThemeFor(buttonThemes)}
`;

export const Container = styled.div``;

export const Image = styled.img``;

export const Input = styled.input``;

export const FormLabel = styled.label``;

export const Label = styled.div`
  font-size: 1.2rem;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Main = styled.main``;

export const NavLink = styled(RouterNavLink)`
  color: ${getThemeColor('light')};
  display: inline-grid;
  place-items: center;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  ${setIfActive(navLinkThemes.active)}
`;

export const NavWrapper = styled.nav`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div``;
