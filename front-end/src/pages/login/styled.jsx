import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background.main};
`;

export const Logo = styled.img`
  width: 20%;
  min-width: 250px;
  margin-botton: 2%;
`;

export const LoginButton = styled.button`
  background-color: ${(props) => props.theme.background.button};
  color: ${(props) => props.theme.font.button};
  height: 6%;
  width: 13%;
  min-width: 150px;
  font-size: 1.6em;
  margin-top: 2em; 
  border-radius: 10px;
`;

export const Register = styled(Link)`
  font-decoration: none;
`;
