import { all, call } from 'redux-saga/effects';

import { directorySagas } from './directory/sagas';
import { shopSagas } from './shop/sagas';
import { userSagas } from './user/sagas';
import { cartSagas } from './cart/sagas';

export default function* rootSaga() {
  yield all([
    call(directorySagas),
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ]);
}
