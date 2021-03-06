import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQnt, item) => accumulatedQnt + item.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItemsTotal =>
    cartItemsTotal.reduce(
      (accumulatedTotal, item) => accumulatedTotal + item.quantity * item.price,
      0
    )
);
