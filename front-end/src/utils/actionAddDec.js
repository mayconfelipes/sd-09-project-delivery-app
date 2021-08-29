const { setCarrinhoLocalStorage, getTotalCartLocalStorage } = require('./storage');
const dataTestId = require('./dataTestIds');

const testid = dataTestId.default;
const QTDDEFAULTSTATE = -1;

const setProductLocalStorage = (idProduct, qtdProduct) => {
  const name = document.querySelector(`[data-testid='${testid[15]}${idProduct}']`)
    .innerText;
  const price = parseFloat(
    document
      .querySelector(`[data-testid='${testid[16]}${idProduct}']`)
      .innerText.split('R$')[1]
      .replace(',', '.'),
  );
  const total = parseFloat((price * qtdProduct).toFixed(2));

  productData = {
    productId: idProduct,
    name,
    quantity: qtdProduct,
    unitPrice: price.toFixed(2),
    subTotal: total.toFixed(2),
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

const doOnChangeQtdInput = (event, setQtdInputOnChange) => {
  const qtdProduct = parseInt(event.target.value, 10);
  if (qtdProduct > QTDDEFAULTSTATE) {
    const idProduct = event.target.id.split('-')[1]; // no id do input tem o id do produto
    setProductLocalStorage(idProduct, qtdProduct);
    setQtdInputOnChange(qtdProduct);
  }
};

module.exports = { decrement, increment, doOnChangeQtdInput };
