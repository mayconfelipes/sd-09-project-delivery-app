import styled from 'styled-components';

const colorsPallete = {
  grey: '#264653',
  green: '#2a9d8f',
  yellow: '#e9c46a',
  orange: '#e76f51',
  white: '#fff',
};

const root = {
  colors: {
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
  padding: '14px',
  border-radius: '8px',
  margin-bottom: '14px',
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
`;

export const InputElement = styled.input`
  background-color: '#2D303E',
  padding: '14px',
  border-radius: '8px',
  border: '1px solid #393C49',
  margin-bottom: '15px',
  color: '#E0E6E9',
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
  border: 1px solid ${colorsPallete.grey};
  width: 200px;

  img {
    max-width: 100%;
    height: auto;
  }

  span {
    padding: 5px 10px;
  }
`;

export const InputRageElement = styled.div`
  button {
    color: #000;
  }
`;

export const InputSelectElement = styled.label``;

export const InputTextElement = styled.label`
  display: 'flex';
  flex-direction: 'column';
  span{
    color: '#FFF';
    padding: '8px';
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

export const NavBarElement = styled.div``;

export const ProductListElement = styled.ul``;

// TEMPLATES

export const OrderDetailsAddressElement = styled.div``;

export const OrdersElement = styled.div``;
