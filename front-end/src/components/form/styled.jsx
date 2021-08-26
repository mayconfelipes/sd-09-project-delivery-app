import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-width: 250px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2% 4%;
  border-radius: 10px;
  margin: 2% 0 0.5% 0;
  font-size: 1.5em;
  color: ${(props) => props.theme.font.input}
`;
