import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import HeaderCustomer from '../components/HeaderCustomer';
import HeaderNav from '../components/HeaderNav';
import '@testing-library/jest-dom/extend-expect';
import createToken from './createToken';

const userToken = {
  email: "zebirita@email.com",
  id: 3,
  name: "Cliente Zé Birita",
  role: "customer",
}

const token = createToken(userToken);

describe('NAV Customer teste', () => {
  const user = [{
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
    token,
  }];

  test('Verifica se renderizou a pagina de NAV', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<HeaderCustomer />, { route: '/customer/orders' });

    expect(history.location.pathname).toBe('/customer/orders')
  });
});

describe('NAV teste', () => {
  const user = [{
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
    token,
  }];

  test('Verifica se renderizou a pagina de NAV', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<HeaderNav />, { route: '/customer/orders' });

    expect(history.location.pathname).toBe('/customer/orders')
  });
});