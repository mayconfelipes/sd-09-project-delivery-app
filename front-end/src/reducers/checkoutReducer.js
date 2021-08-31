import { PRODUCTSBUY_ACTION, TOTALPRICE_ACTION } from '../actions/checkoutAction';

const INITIAL_STATE = {
  productsBuy: [],
  totalPrice: '0,00',
};

function checkoutReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case PRODUCTSBUY_ACTION:
    return { ...state, productsBuy: action.productsBuy };
  case TOTALPRICE_ACTION:
    return { ...state, totalPrice: action.totalPrice };
  default:
    return state;
  }
}

export default checkoutReducer;
