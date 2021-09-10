import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import Register from '../pages/Register';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Register teste', () => {
  test('Verifica se renderizou a pagina de Register', () => {
    const { getByText } = renderWithRouterAndStore(<Register />);
    const title = getByText(/Cadastro/i);

    expect(title).toBeInTheDocument();
  });

  test('Tem tres input', () => {
    const { container } = renderWithRouterAndStore(<Register />, { route: '/resgiter' });
    const allInput = container.querySelectorAll('input');

    userEvent.type(allInput[0], 'test');
    userEvent.type(allInput[1], '123456');

    expect(allInput.length).toBe(3);
    expect(allInput[0].type).toBe('text');
    expect(allInput[1].type).toBe('text');
    expect(allInput[2].type).toBe('password');
  });

  test('Tem um button para registrar', async  () => {
    const { getByTestId, container } = renderWithRouterAndStore(<Register />, { route: '/resgiter' });
    const button = getByTestId('common_register__button-register');
    const allInput = container.querySelectorAll('input');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('CADASTRAR');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'TesteTesteTeste' )
    userEvent.type(allInput[1], 'test');
    userEvent.type(allInput[2], '123456');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'TesteTesteTeste' )
    userEvent.type(allInput[1], 'test@com@');
    userEvent.type(allInput[2], '12345');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'TesteTesteTeste' )
    userEvent.type(allInput[1], 'testcom@');
    userEvent.type(allInput[2], '12345');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'TesteTesteTeste' )
    userEvent.type(allInput[1], 'test@test.');
    userEvent.type(allInput[2], '12345');
    expect(button).toBeDisabled();

    userEvent.type(allInput[0], 'TesteTesteTeste')
    userEvent.type(allInput[1], 'fulana08@deliveryapp.com');
    userEvent.type(allInput[2], 'fulana@123');
    expect(button).toBeEnabled();

    fireEvent.click(button);

    await new Promise(r => setTimeout(_ => r(), 1000))
  });
});
