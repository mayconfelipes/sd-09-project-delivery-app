import fetchGET from '../services/fetchGET';

export const ALLPRODUCTS_ACTION = 'ALLPRODUCTS_ACTION';

const getProducts = (products) => ({ type: ALLPRODUCTS_ACTION, products });

export const productsThunk = () => async (dispatch) => {
  const result = await fetchGET('products');
  return dispatch(getProducts(result));
};
