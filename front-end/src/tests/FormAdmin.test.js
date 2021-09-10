import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import FormAdmin from '../pages/FormAdmin';
import '@testing-library/jest-dom/extend-expect';
import createToken from './createToken';

const userToken = {
  email: "adm@deliveryapp.com",
  id: 1,
  name: "Delivery App Admin",
  role: "administrator",
}

const token = createToken(userToken);

describe('NAV Customer teste', () => {
  const user = [{
    email: "adm@deliveryapp.com",
    id: 1,
    name: "Delivery App Admin",
    role: "administrator",
    token,
  }];

  test('Verifica se renderizou a pagina de NAV', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<FormAdmin />, { route: '/admin/manage' });

    expect(history.location.pathname).toBe('/admin/manage')
  });
});