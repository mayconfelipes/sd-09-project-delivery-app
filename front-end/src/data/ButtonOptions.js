import React from 'react';

export const loginButton = {
  name: 'login',
  label: 'LOGIN',
};

export const registerButton = {
  name: 'register',
  label: 'Ainda não tenho conta',
};

export const finishRegisterButton = {
  name: 'register',
  label: 'CADASTRAR',
};

export const addItemBtn = (id) => ({
  name: `card-add-item-${id}`,
  label: '+',
});

export const rmItemBtn = (id) => ({
  name: `card-rm-item-${id}`,
  label: '-',
});

export const cartButton = (total) => ({
  name: 'cart',
  label: (
    <span data-testid="customer_products__checkout-bottom-value">
      {`Ver Carrinho R$ ${total}`.replace(/\./, ',') }
    </span>),
});
