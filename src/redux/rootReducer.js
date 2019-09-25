import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
  user: userReducer,
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer
});
