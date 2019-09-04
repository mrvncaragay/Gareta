import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const selectShopData = createSelector(
  [shopSelect],
  shop => shop.shopData
);
