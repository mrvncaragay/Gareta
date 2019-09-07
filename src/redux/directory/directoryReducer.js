import directoryActionTypes from './types';

const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMessage: undefined
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case directoryActionTypes.FETCH_CATEGORIES_START: {
      return {
        ...state,
        isFetching: true
      };
    }

    case directoryActionTypes.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        sections: action.payload
      };
    }

    case directoryActionTypes.FETCH_CATEGORIES_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    }

    default:
      return state;
  }
};

export default directoryReducer;
