import { combineReducers } from 'redux';

import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer
});
