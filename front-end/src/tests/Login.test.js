import React from 'react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndStore } from './testRender';
import Login from '../pages/Login';
import '@testing-library/jest-dom/extend-expect';

describe('Login teste', () => {
  test('Verifica se renderizou a pagina de Login', () => {
    const { getByText } = renderWithRouterAndStore(<Login />);
    const title = getByText(/Têlivery/i);

    expect(title).toBeInTheDocument();
  });

  test('Tem dois input', () => {
    const { container } = renderWithRouterAndStore(<Login />);
    const allInput = container.querySelectorAll('input');

    expect(allInput.length).toBe(2);
    expect(allInput[0].type).toBe('text');
    expect(allInput[1].type).toBe('password');
  });

  test('Tem o botao de register', () => {
    const { getByText } = renderWithRouterAndStore(<Login />);
    const title = getByText(/Ainda não tenho conta/i);

    expect(title).toBeInTheDocument();
  });

  test('Tem um button para logar', async () => {
    const { getByTestId, container, history } = renderWithRouterAndStore(<Login />);
    const button = getByTestId('common_login__button-login');
    const allInput = container.querySelectorAll('input');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('LOGIN');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'test');
    userEvent.type(allInput[1], '123456');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'test@com@');
    userEvent.type(allInput[1], '12345');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'testcom@');
    userEvent.type(allInput[1], '12345');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'test@test.');
    userEvent.type(allInput[1], '12345');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'fulana@deliveryapp.com');
    userEvent.type(allInput[1], 'fulana@123');
    expect(button).toBeEnabled();

    fireEvent.click(button);

    await new Promise(r => setTimeout(_ => r(), 1000));
    expect(history.location.pathname).toBe('/seller/orders');
  });
});
