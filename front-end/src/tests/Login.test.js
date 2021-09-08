import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { fireEvent } from '@testing-library/react';

describe('Tela de Login e Register', () => {
  test('Renderiza o caminho /login', () => {
    const { history } = renderWithRouter(<App />);

    const { pathname } = history.location;

    expect(pathname).toBe('/login');
  });

  test('Verifica se renderiza o texto: Email', () => {
    const { getByText } = renderWithRouter(<App />);
    const appElement = getByText(/EMAIL/i);

    expect(appElement).toBeInTheDocument();
  });

  test('Verifica se renderiza o texto: Senha', () => {
    const { getByText } = renderWithRouter(<App />);
    const appElement = getByText(/SENHA/i);

    expect(appElement).toBeInTheDocument();
  });
  
  test('Verifica se há o campo de email', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_login__input-email/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Verifica se há o campo de senha', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_login__input-password/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão: Entrar', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_login__button-login/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão: Ainda não tenho conta', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_login__button-register/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Renderiza a tela Register, ao clicar em: Ainda não tenho conta da tela Login', () => {
    const { getByText, history } = renderWithRouter(<App />);

    fireEvent.click(getByText(/AINDA NÃO TENHO CONTA/i));

    const { pathname } = history.location;
    expect(pathname).toBe('/register');
  });
});
