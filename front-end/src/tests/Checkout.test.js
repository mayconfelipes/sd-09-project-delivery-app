import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import Checkout from '../pages/Checkout';
import createToken from './createToken';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';

const userToken = {
  email: "teste@teste.com",
  id: 4,
  name: "TesteTesteTest",
  role: "customer",
}

const token = createToken(userToken);

const INITIAL = {
  checkoutReducer: {
    productsBuy: [],
    totalPrice: '0,00',
  }
}

const buy = [
  {
  id: 2,
  name: 'Heineken 600ml',
  price:  '7.50',
  urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
  quantity: 10,
  }
]

const total = '75,00';

describe('Checkout teste', () => {
  const user = [{
    email: "teste@teste.com",
    id: 4,
    name: "TesteTesteTest",
    role: "customer",
    token,
  }];

  test('Verifica se renderizou a pagina de Checkout', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { getByText } = renderWithRouterAndStore(<Checkout />);
    const title = getByText(/Detalhes/i);

    expect(title).toBeInTheDocument();
  });

  test('Tem inputs para endereco e vendedor', async () => {
    INITIAL.checkoutReducer.productsBuy = buy;
    INITIAL.checkoutReducer.totalPrice = total;
    const { getByTestId, container } = renderWithRouterAndStore(<Checkout />, '/customer/checkout' , INITIAL);
    const button = getByTestId('customer_checkout__button-submit-order');
    const allInput = container.querySelectorAll('input');
    
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('FINALIZAR PEDIDO');
    
    userEvent.type(allInput[0], 'Teste Teste, Bairro TESTE');
    userEvent.type(allInput[1], '123')

    fireEvent.click(button);
  });
});
