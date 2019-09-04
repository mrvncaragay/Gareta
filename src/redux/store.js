import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';

// Use Local Storage as default
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middlewares),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__
      ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
      : [])
  )
);

export const persistor = persistStore(store);
