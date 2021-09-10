import { combineReducers } from 'redux';
import checkoutReducer from './checkoutReducer';
import usersAdminReducer from './usersAdminReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  checkoutReducer,
  usersAdminReducer,
  productsReducer,
});

export default rootReducer;
