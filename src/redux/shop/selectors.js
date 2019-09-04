import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const selectShopCollections = createSelector(
  [shopSelect],
  shop => shop.collections
);
