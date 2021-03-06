import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionsTypes from '../user/types';
import { clearCart } from './cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
