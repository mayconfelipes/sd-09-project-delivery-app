import { combineReducers } from 'redux';
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
  checkoutReducer,
});

export default rootReducer;
