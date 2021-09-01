const getLocalStorageInitialArray = () => {
  const data = JSON.parse(localStorage.getItem('productsAdded')) || [];
  return data;
};

const addToLocal = (productObject) => {
  const productsList = getLocalStorageInitialArray();
  const productFoundIndex = productsList
    .findIndex((prod) => prod.nameAndQuantityInMl === productObject.nameAndQuantityInMl);
  if (productFoundIndex < 0) {
    productsList.push(productObject);
    localStorage.setItem('productsAdded', JSON.stringify(productsList));
    return;
  }
  productsList[productFoundIndex].quantity = productObject.quantity;
  if (productObject.quantity === 0) {
    productsList.splice(productFoundIndex, 1);
    localStorage.setItem('productsAdded', JSON.stringify(productsList));
    return;
  }
  localStorage.setItem('productsAdded', JSON.stringify(productsList));
};

const clearWithZero = () => {
  const productsList = getLocalStorageInitialArray();
  const productsListWithoutZero = productsList
    .filter((product) => product.quantity !== 0);
  localStorage.setItem('productsAdded', JSON.stringify(productsListWithoutZero));
};

export { addToLocal, clearWithZero };
