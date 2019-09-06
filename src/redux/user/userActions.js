import UserActionsTypes from './types';

export const googleSignInStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionsTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = errorMessage => ({
  type: UserActionsTypes.SIGN_IN_FAILURE,
  payload: errorMessage
});

export const checkUserSession = () => ({
  type: UserActionsTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionsTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionsTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = errorMessage => ({
  type: UserActionsTypes.SIGN_OUT_FAILURE,
  payload: errorMessage
});

export const signUpStart = userInfo => ({
  type: UserActionsTypes.SIGN_UP_START,
  payload: userInfo
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionsTypes.SIGN_UP_SUCESSS,
  payload: { user, additionalData }
});

export const signUpFailure = errorMessage => ({
  type: UserActionsTypes.SIGN_UP_FAILURE,
  payload: errorMessage
});
