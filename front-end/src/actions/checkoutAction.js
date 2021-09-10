import fetchGET from '../services/fetchGET';
import fetchPOST from '../services/fetchPOST';

export const PRODUCTSBUY_ACTION = 'PRODUCTSBUY_ACTION';

export const productsAction = (productsBuy) => ({
  type: PRODUCTSBUY_ACTION, productsBuy });

export const TOTALPRICE_ACTION = 'TOTALPRICE_ACTION';

export const setTotalPriceAction = (totalPrice) => ({
  type: TOTALPRICE_ACTION, totalPrice });

export const ALLSELLER_ACTION = 'ALLSELLER_ACTION';

const allSeller = (sellers) => ({ type: ALLSELLER_ACTION, sellers });

export const allSellerThunk = () => async (dispatch) => {
  const result = await fetchGET('users');
  const arrayFilter = result.filter((user) => user.role === 'seller');
  return dispatch(allSeller(arrayFilter));
};

export const PLACEORDER_ACTION = 'PLACEORDER_ACTION';

const placeOrder = (orderID) => ({ type: PLACEORDER_ACTION, orderID });

export const placeOrderThunk = (body) => async (dispatch) => {
  const { id } = await fetchPOST('sales', body);
  return dispatch(placeOrder(id));
};
