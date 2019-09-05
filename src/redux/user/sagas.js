import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionsTypes from './types';
import { googleSignInSuccess, googleSignInFailure } from './userActions';

// Google Signin
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/util';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();

    yield put(
      googleSignInSuccess({
        id: userSnapShot.id,
        ...userSnapShot.data()
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
