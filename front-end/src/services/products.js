const retrieveFromLocal = () => {
  let data = JSON.parse(localStorage.getItem('productsAdded'));
  if (!data) data = [];
  return data;
};

const addToLocal = (productObject) => {
  const productsList = retrieveFromLocal();
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
    return;
  }
  localStorage.setItem('productsAdded', JSON.stringify(productsList));
};

export default addToLocal;
