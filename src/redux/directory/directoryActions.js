import CategoryActionTypes from './types';

export const fetchCategoriesStart = () => {
  return {
    type: CategoryActionTypes.FETCH_CATEGORIES_START
  };
};

export const fetchCategoriesSuccess = directoriesMap => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: directoriesMap
});

export const fetchCategoriesFailure = errorMessage => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: errorMessage
});
