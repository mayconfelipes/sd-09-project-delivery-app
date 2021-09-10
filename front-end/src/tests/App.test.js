import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import App from '../App';
import Customer from '../pages/Customer';
import Seller from '../pages/Seller';
import '@testing-library/jest-dom/extend-expect';
import createToken from './createToken';

const userToken = {
  email: "zebirita@email.com",
  id: 3,
  name: "Cliente Zé Birita",
  role: "customer",
}

const sellerToken = {
  email: "fulana@deliveryapp.com'",
  id: 2,
  name: "Fulana Pereira",
  role: "seller",
}

const token = createToken(userToken);

const tokenS = createToken(sellerToken);

describe('APP teste', () => {
  const user = [{
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
    token,
  }];

  test('Verifica se renderizou a pagina de APP', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<App />, { route: '/' });

    expect(history.location.pathname).toBe('/login')
  });
});

describe('Customer teste', () => {
  const user = [{
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
    token,
  }];

  test('Verifica se renderizou a pagina de Customer', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<Customer />, { route: '/customer/products' });

    expect(history.location.pathname).toBe('/login')
  });
});


describe('Seller teste', () => {
  const user = [{
    email: "fulana@deliveryapp.com'",
    id: 2,
    name: "Fulana Pereira",
    role: "seller",
    token: tokenS,
  }];

  test('Verifica se renderizou a pagina de Seller', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<Seller />, { route: '/seller/orders' });

    expect(history.location.pathname).toBe('/login')
  });
});

describe('NOT FOUND teste', () => {
  const user = [{
    email: "fulana@deliveryapp.com'",
    id: 2,
    name: "Fulana Pereira",
    role: "seller",
    token: tokenS,
  }];

  test('Verifica se renderizou a pagina de Seller', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<App />, { route: '/notFound' });

    expect(history.location.pathname).toBe('/notFound')
  });
});