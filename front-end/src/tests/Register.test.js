import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Tela de Register', () => {

  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    history.push('/register');
  });

  test('Verifica se renderiza o texto "Nome"', () => {
    const { getByText } = renderWithRouter(<App />);

    const nome = getByText(/NOME/i);

    expect(nome).toBeInTheDocument();
  });

  test('Verifica se há o campo de nome', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_register__input-name/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Verifica se há o campo de email', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_register__input-email/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Verifica se há o campo de senha', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_register__input-password/);

    expect(emailTestId).toBeInTheDocument();
  });

  test('Verifica se há o botão "Cadastrar"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const emailTestId = getByTestId(/common_register__button-register/);

    expect(emailTestId).toBeInTheDocument();
  });
});
