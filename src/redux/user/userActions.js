import UserActionsTypes from './types';

export const setCurrentUser = user => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = errorMessage => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: errorMessage
});

export const emailSignInStart = () => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_START
});

export const emailSignInSuccess = emailAndPassword => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_SUCCESS,
  paylaod: emailAndPassword
});

export const emailSignInFailure = errorMessage => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage
});
