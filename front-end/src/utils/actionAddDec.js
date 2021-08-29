const { setCarrinhoLocalStorage, getTotalCartLocalStorage } = require('./storage');
const dataTestId = require('./dataTestIds');

const testid = dataTestId.default;

const setProductLocalStorage = (idProduct, qtdProduct) => {
  const name = document.querySelector(`[data-testid='${testid[15]}${idProduct}']`)
    .innerText;
  const urlImage = document.querySelector(
    `[data-testid='${testid[17]}${idProduct}']`,
  ).src;
  const price = parseFloat(
    document
      .querySelector(`[data-testid='${testid[16]}${idProduct}']`)
      .innerText.split('R$')[1]
      .replace(',', '.'),
  );
  const total = parseFloat((price * qtdProduct).toFixed(2));

  productData = {
    id: idProduct,
    name,
    urlImage,
    price,
    quantity: qtdProduct,
    total,
  };
  setCarrinhoLocalStorage(productData);
  document.querySelector(`[data-testid='${testid[21]}']`)
    .innerText = getTotalCartLocalStorage();
};

const decrement = (event) => {
  const idProduct = event.target.id.split('-')[1];
  const qtdProduct = document.getElementById(`qtd-${idProduct}`).value - 1;
  if (qtdProduct >= 0) {
    document.getElementById(`qtd-${idProduct}`).value = qtdProduct;
    setProductLocalStorage(idProduct, qtdProduct);
  }
};

const increment = (event) => {
  const idProduct = event.target.id.split('-')[1];
  let qtdProduct = parseInt(
    document.getElementById(`qtd-${idProduct}`).value,
    10,
  );
  qtdProduct += 1;
  document.getElementById(`qtd-${idProduct}`).value = qtdProduct; // alterando elem tela
  setProductLocalStorage(idProduct, qtdProduct);
};

module.exports = { decrement, increment };
