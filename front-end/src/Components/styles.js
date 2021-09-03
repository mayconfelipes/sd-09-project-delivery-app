import styled from 'styled-components';

const root = {
  colors: {
    blueLight: '#2D303E',
    red: '#EA7C69',
    white: '#fff',
  },
  button: {
    primary: {
      backgroundColor: '#EA7C69',
      color: '#FFF',
    },
  },
};

// ATOMS
export const ButtonElement = styled.button`
  padding: 14px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 14px;
  background-color: ${({ styleColor }) => {
    if (root.button[styleColor]) {
      return root.button[styleColor].backgroundColor;
    }
    return null;
  }};
  color: ${({ styleColor }) => {
    if (root.button[styleColor]) {
      return root.button[styleColor].color;
    }
    return null;
  }};
  ${(props) => {
    if (props.disabled) {
      return `background-color: ${root.colors.blueLight}`;
    }
  }}
`;

export const InputElement = styled.input`
  background-color: #2D303E;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #393C49;
  margin-bottom: 15px;
  color: #E0E6E9;
`;

export const ListLinkElement = styled.li`
  list-style: none;
`;

export const OptionElement = styled.option``;

export const SubtitleElement = styled.h2``;

export const TextElement = styled.span``;

export const TitleElement = styled.h1``;

// MOLECULES
export const ImagePriceElement = styled.div`
  border: 1px solid ${root.colors.white};
  width: 200px;
  img {
    max-width: 100%;
    height: auto;
  };
  span {
    padding: 5px 10px;
  };
`;

export const InputRageElement = styled.div`
  button {
    color: #000;
  }
`;

export const InputSelectElement = styled.label``;

export const InputTextElement = styled.label`
  display: flex;
  flex-direction: column;
  span{
    color: #FFF;
    padding: 8px;
  }
`;

export const NavigationsElement = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const HeaderContainer = styled.div``;

export const ProductLineElement = styled.li``;

// ORGANISMS

export const CardProductElement = styled.div``;

export const CardStatusElement = styled.div``;

export const NavBarElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductListElement = styled.ul``;

export const FormElement = styled.form`
  background-color: #1F1D2B;
  padding: 27px 24px 13px 24px;
  border-radius: 8px;
  border: 1px solid #393C49;
  display: flex;
  flex-direction: column;
  width: 200px;
`;

// TEMPLATES

export const OrderDetailsAddressElement = styled.div``;

export const OrdersElement = styled.div``;
