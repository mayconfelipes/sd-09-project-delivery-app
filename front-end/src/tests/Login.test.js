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

  test('Verifica se renderiza o texto "Email"', () => {
    const { getByText } = renderWithRouter(<App />);
    const text = getByText(/EMAIL/i);

    expect(text).toBeInTheDocument();
  });

  test('Verifica se renderiza o texto "Senha"', () => {
    const { getByText } = renderWithRouter(<App />);
    const text = getByText(/SENHA/i);

    expect(text).toBeInTheDocument();
  });
  
  test('Verifica se há o campo de email', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_login__input-email/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Verifica se há o campo de senha', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const passwordTestId = getByTestId(/common_login__input-password/);

    expect(passwordTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão "Entrar"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const loginBtnTestId = getByTestId(/common_login__button-login/);

    expect(loginBtnTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão "Ainda não tenho conta"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const registerBtnTestId = getByTestId(/common_login__button-register/);

    expect(registerBtnTestId).toBeInTheDocument();
  });

  test('Alterando o valor do campo "Email" e testando o valor guardado', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const inputEmail = getByTestId(/common_login__input-email/);
    expect(inputEmail).toHaveValue('');

    fireEvent.change(inputEmail, { target: { value: 'adm@deliveryapp.com' } });
    expect(inputEmail).toHaveValue('adm@deliveryapp.com');
  });

  test('Alterando o valor do campo "Senha" e testando o valor guardado', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const inputPassword = getByTestId(/common_login__input-password/);
    expect(inputPassword).toHaveValue('');

    fireEvent.change(inputPassword, { target: { value: '--adm2@21!!--' } });
    expect(inputPassword).toHaveValue('--adm2@21!!--');
  });

  test('Renderiza a tela "Register" ao clicar em "Ainda não tenho conta" da tela Login', () => {
    const { getByText, history } = renderWithRouter(<App />);

    fireEvent.click(getByText(/AINDA NÃO TENHO CONTA/i));

    const { pathname } = history.location;
    expect(pathname).toBe('/register');
  });
});
