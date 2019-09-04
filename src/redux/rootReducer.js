import { combineReducers } from 'redux';

import directoryReducer from './directory/directoryReducer';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
  directory: directoryReducer,
  user: userReducer,
  cart: cartReducer
});
