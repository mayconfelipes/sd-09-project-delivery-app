import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import Orders from '../pages/Orders';
import OrderCard from '../components/OrderCard';
import '@testing-library/jest-dom/extend-expect';
import createToken from './createToken';

const userToken = {
  email: "zebirita@email.com",
  id: 3,
  name: "Cliente Zé Birita",
  role: "customer",
}

const token = createToken(userToken);

const INITIAL = {
  orderReducer: {
    allSalesProducts: [
      {
        id: 1,
        totalPrice: "69.24",
        deliveryAddress: "TESTE TESTE",
        deliveryNumber: "123",
        saleDate: "2021-09-09T22:20:55.000Z",
        status: "Pendente",
        userId: 3,
        sellerId: 2,
        seller: {
          id: 2,
          name: "Fulana Pereira",
          email: "fulana@deliveryapp.com",
          role: "seller",
        },
        products: [{
          id: 2,
          name: "Heineken 600ml",
          price: "7.50",
          salesProducts: {
            quantity: 7,
            productId: 2,
            saleId: 2,
          },
        }],
      }
    ],
  }
}

describe('Orders teste', () => {
  const user = [{
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
    token,
  }];

  test('Verifica se renderizou a pagina de Orders', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = renderWithRouterAndStore(<Orders />, { route: '/customer/orders' }, INITIAL);

    expect(history.location.pathname).toBe('/customer/orders')
  });
});
