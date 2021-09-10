import { ALLPRODUCTS_ACTION } from '../actions/productsAction';

const INITIAL_STATE = {
  allProduct: [],
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ALLPRODUCTS_ACTION:
    return { allProduct: action.products };
  default:
    return state;
  }
}

export default productsReducer;
