import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Tela de Products', () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.emViaXJpdGFAZW1haWwuY29t.kP7cjK6m8frZhlcyU13V3JxyiJOyX0iyOYd9jsoUiJ8';

  beforeEach(() => {
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify({
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      role: 'customer',
      token,
    }));

    const { history } = renderWithRouter(<App />);
    history.push('/customer/products');
  });

  test('Verifica se há o botão "Produtos" na tela Products', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const linkProductsTestId = getByTestId(/customer_products__element-navbar-link-products/);
    expect(linkProductsTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão "Meus pedidos" na tela Products', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const linkOrdersTestId = getByTestId(/customer_products__element-navbar-link-orders/);
    expect(linkOrdersTestId).toBeInTheDocument();
  });

  test('Verifica se há o nome completo na tela Products', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const fullNameTestId = getByTestId(/customer_products__element-navbar-user-full-name/);
    expect(fullNameTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão "Sair" na tela Products', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const linkLogoutTestId = getByTestId(/customer_products__element-navbar-link-logout/);
    expect(linkLogoutTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão "Ver carrinho" na tela Products', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const cartBtnTestId = getByTestId(/customer_products__button-cart/);
    expect(cartBtnTestId).toBeInTheDocument();
  });

  test('Verifica se há a soma dos produtos na tela Products', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const checkoutValueTestId = getByTestId(/customer_products__checkout-bottom-value/);
    expect(checkoutValueTestId).toBeInTheDocument();
  });
});
