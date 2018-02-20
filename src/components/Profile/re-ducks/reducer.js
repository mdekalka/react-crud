import types from './types';

const initialState = {
  data: [],
  total: null,
  isFetching: false,
  errorMessage: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_PROFILE_START:
      return { ...state, isFetching: true };

    case types.FETCHING_PROFILE_SUCCESS:
      return { ...state, data: action.data, total: action.total, isFetching: false, errorMessage: '' };

    case types.FETCHING_PROFILE_FAILED:
      return { ...state, isFetching: false, errorMessage: action.error };


    default:
      return state;
  }
};

export default filterReducer;