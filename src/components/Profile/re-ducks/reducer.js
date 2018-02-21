import types from './types';

const initialState = {
  data: [],
  total: null,
  isFetching: false,
  errorMessage: '',
  currentProfile: null
};

const handleStart = (state, action) => {
  return { ...state, isFetching: true };
}
const handleError = (state, action) => {
  return { ...state, isFetching: false, errorMessage: action.error };
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_PROFILE_START:
      return handleStart(state, action);

    case types.FETCHING_PROFILE_SUCCESS:
    debugger
      return { ...state, currentProfile: action.data, isFetching: false, errorMessage: '' };

    case types.FETCHING_PROFILE_FAILED:
      return handleError(state, action);

    case types.FETCHING_PROFILES_START:
      return handleStart(state, action);

    case types.FETCHING_PROFILES_SUCCESS:
      return { ...state, data: action.data, total: action.total, isFetching: false, errorMessage: '' };

    case types.FETCHING_PROFILES_FAILED:
      return handleError(state, action);

    case types.ADD_PROFILE_START:
      return handleStart(state, action);

    case types.ADD_PROFILE_SUCCESS:
      return { ...state, isFetching: false, errorMessage: '' };

    case types.ADD_PROFILE_FAILED:
      return handleError(state, action);

    case types.UPDATE_PROFILE_START:
      return handleStart(state, action);

    case types.UPDATE_PROFILE_SUCCESS:
      return { ...state, isFetching: false, errorMessage: '', data: state.data.map(dataItem => {
        if (dataItem.id === action.id) {
          return { ...dataItem, ...action.data }
        }

        return dataItem;
        })
      };

    case types.UPDATE_PROFILE_FAILED:
      return handleError(state, action);

    case types.REMOVE_PROFILE_START:
      return handleStart(state, action);

    case types.REMOVE_PROFILE_SUCCESS:
      return { ...state, isFetching: false, errorMessage: '', data: state.data.filter(dataItem => {
        if (dataItem.id !== action.id) {
          return true;
        }

        return false;
        })
      };

    case types.REMOVE_PROFILE_FAILED:
      return handleError(state, action);

    default:
      return state;
  }
};

export default filterReducer;