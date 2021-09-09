import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import Products from '../pages/Products';
import createToken from './createToken';
import '@testing-library/jest-dom/extend-expect';

const userToken = {
  email: "teste@teste.com",
  id: 4,
  name: "TesteTesteTest",
  role: "customer",
}

const token = createToken(userToken);

describe('Products teste', () => {
  const user = {
    email: "teste@teste.com",
    id: 4,
    name: "TesteTesteTest",
    role: "customer",
    token,
  };

  test('Verifica se renderizou a pagina de Products', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { getByText } = renderWithRouterAndStore(<Products />);
    const title = getByText(/Ver Carrinho/i);

    await new Promise(r => setTimeout(_ => r(), 1000))
    expect(title).toBeInTheDocument();
  });
});
