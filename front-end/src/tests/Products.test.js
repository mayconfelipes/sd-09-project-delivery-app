import React from 'react';
import { renderWithRouterAndStore } from './testRender';
import Products from '../pages/Products';
import createToken from './createToken';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';

const userToken = {
  email: "zebirita@email.com",
  id: 3,
  name: "Cliente Zé Birita",
  role: "customer"
}

const token = createToken(userToken);

const INITIAL = {
  productsReducer: {
    allProduct: [
      { id: 1, name: 'Skol Lata 250ml', price: '2.20', urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg' },
      { id: 2, name: 'Heineken 600ml', price: '7.50', urlImage: 'http://localhost:3001/images/heineken_600ml.jpg' },
      { id: 3, name: 'Antarctica Pilsen 300ml', price: '2.49', urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg' },
      { id: 4, name: 'Brahma 600ml', price: '7.50', urlImage: 'http://localhost:3001/images/brahma_600ml.jpg' },
      { id: 5, name: 'Skol 269ml', price: '2.19', urlImage: 'http://localhost:3001/images/skol_269ml.jpg' },
      { id: 6, name: 'Skol Beats Senses 313ml', price: '4.49', urlImage: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg' },
      { id: 7, name: 'Becks 330ml', price: '4.99', urlImage: 'http://localhost:3001/images/becks_330ml.jpg' },
      { id: 8, name: 'Brahma Duplo Malte 350ml', price: '2.79', urlImage: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg' },
      { id: 9, name: 'Becks 600ml', price: '8.89', urlImage: 'http://localhost:3001/images/becks_600ml.jpg' },
      { id: 10, name: 'Skol Beats Senses 269ml', price: '3.57', urlImage: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg' },
      { id: 11, name: 'Stella Artois 275ml', price: '3.49', urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg' },
    ],
  }
}

describe('Products teste', () => {
  const user = {
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
    token,
  };

  test('Verifica se renderizou a pagina de Products', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { getByText } = renderWithRouterAndStore(<Products />, { route: '/customer/products' }, INITIAL);
    const title = getByText(/Ver Carrinho/i);

    expect(title).toBeInTheDocument();
  });
  
  test('Verifica se renderizou a pagina de Products', async () => {
    localStorage.setItem('user', JSON.stringify(user));
    const { getByTestId } = renderWithRouterAndStore(<Products />, { route: '/customer/products' }, INITIAL);
    const buttonSub = getByTestId('customer_products__button-card-rm-item-1');
    const buttonAdd = getByTestId('customer_products__button-card-add-item-1')
    const inputValue = getByTestId('customer_products__input-card-quantity-1')

    fireEvent.click(buttonAdd);

    fireEvent.click(buttonSub);

    fireEvent.click(buttonSub);
  });
});
