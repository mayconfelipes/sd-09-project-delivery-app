import styled from 'styled-components';

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
  height: 7%;
  width: 15%;
  min-width: 150px;
  font-size: 1.6em;
  margin-top: 2em; 
  border-radius: 10px;
`;
