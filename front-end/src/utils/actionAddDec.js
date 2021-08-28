const decrement = (event) => {
  const idProduct = event.target.id.split('-')[1];
  const qtdProduct = document.getElementById(`qtd-${idProduct}`).value - 1;
  if (qtdProduct >= 0) {
    document.getElementById(`qtd-${idProduct}`).value = qtdProduct;
  }
};

const increment = (event, testid) => {
  const idProduct = event.target.id.split('-')[1];
  let qtdProduct = parseInt(
    document.getElementById(`qtd-${idProduct}`).value,
    10,
  );
  qtdProduct += 1;
  document.getElementById(`qtd-${idProduct}`).value = qtdProduct;
  const price = parseFloat(document
    .querySelector(`[data-testid='${testid[16]}${idProduct}']`)
    .innerText.split('R$')[1].replace(',', '.'));
  productData = {
    id: idProduct,
    name: document.querySelector(`[data-testid='${testid[15]}${idProduct}']`)
      .innerText,
    urlImage: document.querySelector(
      `[data-testid='${testid[17]}${idProduct}']`,
    ).src,
    price,
    quantity: qtdProduct,
    total: parseFloat((price * qtdProduct).toFixed(2)),
  };
  console.log(productData);
};

module.exports = { decrement, increment };
