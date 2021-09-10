import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import createToken from './createToken';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import Checkout from '../pages/Checkout';

const userToken = {
  email: "zebirita@email.com",
  id: 3,
  name: "Cliente Zé Birita",
  role: "customer",
}

const token = createToken(userToken);

const INITIAL = {
  checkoutReducer: {
    productsBuy: [],
    totalPrice: '0,00',
    allSeller: [],
    orderID: 1,
  }
}

const buy = [{
  id: 2,
  name: 'Heineken 600ml',
  price:  '7.50',
  urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
  quantity: 10,
  }]

const sellers = [{
  id: 2,
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  password: '3c28d2b0881bf46457a853e0b07531c6',
  role: 'seller',
}]

const total = '75,00';

describe('Checkout teste', () => {
  const user = {
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
    token,
  };

  test('Verifica se renderizou a pagina de Checkout', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { getByText, history } = renderWithRouterAndStore(<Checkout />, { route: '/customer/checkout' });
    const title = getByText(/Detalhes/i);

    expect(history.location.pathname).toBe('/customer/checkout')

    expect(title).toBeInTheDocument();
  });

  test('Tem o botao de remover', async () => {
    INITIAL.checkoutReducer.productsBuy = buy;
    INITIAL.checkoutReducer.totalPrice = total;
    INITIAL.checkoutReducer.allSeller = sellers;
    localStorage.setItem('user', JSON.stringify(user));
    const { getByTestId, getByText } = renderWithRouterAndStore(<Checkout />, { route: '/customer/checkout' }, INITIAL);
    const remove = getByText('Remover');

    fireEvent.click(remove);
  })

  test('Tem inputs para endereco e vendedor', async () => {
    INITIAL.checkoutReducer.productsBuy = buy;
    INITIAL.checkoutReducer.totalPrice = total;
    INITIAL.checkoutReducer.allSeller = sellers;
    localStorage.setItem('user', JSON.stringify(user));
    const { getByTestId, container } = renderWithRouterAndStore(<Checkout />, { route: '/customer/checkout' }, INITIAL);
    const button = getByTestId('customer_checkout__button-submit-order');
    const allInput = container.querySelectorAll('input');
    
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('FINALIZAR PEDIDO');
    
    userEvent.type(allInput[0], 'Teste Teste, Bairro TESTE');
    userEvent.type(allInput[1], '123')

    fireEvent.click(button);
  });

});
