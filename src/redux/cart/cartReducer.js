import { CartActionsTypes } from './types';
import { addItemToCart, removeItemToCart } from './util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden
      };
    }

    case CartActionsTypes.ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    }

    case CartActionsTypes.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload)
      };
    }

    case CartActionsTypes.CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
