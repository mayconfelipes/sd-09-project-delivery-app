import {
  ALLSELLER_ACTION,
  PLACEORDER_ACTION,
  PRODUCTSBUY_ACTION,
  TOTALPRICE_ACTION } from '../actions/checkoutAction';

const INITIAL_STATE = {
  productsBuy: [],
  totalPrice: '0,00',
  allSeller: [],
  orderID: 0,
  redirect: false,
};

function checkoutReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case PRODUCTSBUY_ACTION:
    return { ...state, productsBuy: action.productsBuy };
  case TOTALPRICE_ACTION:
    return { ...state, totalPrice: action.totalPrice };
  case ALLSELLER_ACTION:
    return { ...state, allSeller: action.sellers };
  case PLACEORDER_ACTION:
    return { ...state, orderID: action.orderID, redirect: true };
  default:
    return state;
  }
}

export default checkoutReducer;
