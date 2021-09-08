import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('App teste', () => {
  test('Verifica se a página App renderiza', () => {
    const { getByText } = renderWithRouter(<App />);
    const appElement = getByText(/EMAIL/i);

    expect(appElement).toBeInTheDocument();
  });
});
