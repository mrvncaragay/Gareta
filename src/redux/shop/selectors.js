import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const selectCollections = createSelector(
  [shopSelect],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionIdParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionIdParam] : null)
  );
