import React from 'react';
import userEvent from '@testing-library/user-event';
// import { screen } from '@testing-library/dom';
import Register from '../pages/Register';
import renderWithRouter from './renderWithRouter';

describe('Renderiza a página de registro corretamente', () => {
  const { getByTestId } = renderWithRouter(<Register />);

  const nameInput = getByTestId('common_register__input-name');
  const emailInput = getByTestId('common_register__input-email');
  const passwordInput = getByTestId('common_register__input-password');
  const registerBtn = getByTestId('common_register__button-register');
  describe('Verifica a existências dos elementos esperados', () => {

    it('contém o input de nome', () => {
      expect(nameInput).toBeInTheDocument();
    });

    it('contém o input de email', () => {
      expect(emailInput).toBeInTheDocument();
    });

    it('contém o input de senha', () => {
      expect(passwordInput).toBeInTheDocument();
    });

    it('contém o botão de registro', () => {
      expect(registerBtn).toBeInTheDocument();
      expect(registerBtn).toBeDisabled();
    });
  });

  describe('Verifica que é possível se cadastrar preenchendo os campos', () => {
    userEvent.type(nameInput, 'João Maria José');
    userEvent.type(emailInput, 'joaomj@email.com');
    userEvent.type(passwordInput, '123456789');

    it('verifica que o botão fica ativo', () => {
      expect(registerBtn).not.toBeDisabled();
    });
  });
});