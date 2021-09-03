export const nameOptions = {
  id: 'name',
  name: 'name',
  type: 'text',
  placeholder: 'Seu nome',
  label: 'Nome',
  testId: 'name',
};

export const emailOptions = {
  id: 'email',
  name: 'email',
  type: 'email',
  placeholder: 'seu-email@site.com.br',
  label: 'Email',
  testId: 'email',
};

export const passwordOptions = {
  id: 'password',
  name: 'password',
  type: 'password',
  placeholder: '******',
  label: 'Senha',
  testId: 'password',
};

export const itemQty = (id) => ({
  id: `card-quantity-${id}`,
  name: `card-quantity-${id}`,
  type: 'text',
  placeholder: null,
  label: null,
  testId: `card-quantity-${id}`,
});

export const address = {
  id: 'address',
  name: 'address',
  type: 'text',
  placeholder: null,
  label: 'Endereço',
  testId: 'address',
};

export const addressNumber = {
  id: 'addressNumber',
  name: 'addressNumber',
  type: 'text',
  placeholder: null,
  label: 'Número',
  testId: 'addressNumber',
};
