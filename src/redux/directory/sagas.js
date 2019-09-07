import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCategoriesSnapshotToMap } from '../../firebase/util';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from './directoryActions';
import directoryActionTypes from './types';

export function* fetchDirectoriesAsync() {
  try {
    const collectionRef = firestore.collection('categories');
    const snapshot = yield collectionRef.get();
    const categoriesMap = yield call(convertCategoriesSnapshotToMap, snapshot);
    yield put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* fetchDirectoriesStart() {
  yield takeLatest(
    directoryActionTypes.FETCH_CATEGORIES_START,
    fetchDirectoriesAsync
  );
}

export function* directorySagas() {
  yield all([call(fetchDirectoriesStart)]);
}
