import { handleActions, combineActions } from 'redux-actions'

import types from './types';

const initialState = {
  data: [],
  total: null,
  isFetching: false,
  errorMessage: '',
  currentProfile: null
};

const handleStart = (state) => {
  return { ...state, isFetching: true, errorMessage: '' };
}
const handleError = (state, payload) => {
  return { ...state, isFetching: false, errorMessage: payload.error };
}

const reducer = handleActions({
  [combineActions(
    types.FETCHING_PROFILES_START,
    types.ADD_PROFILE_START,
    types.UPDATE_PROFILE_START,
    types.REMOVE_PROFILE_START
  )](state) {
    return handleStart(state);
  },

  [types.FETCHING_PROFILE_START](state) {
    return { ...state, isFetching: true, currentProfile: null, errorMessage: '' };
  },

  [types.FETCHING_PROFILE_SUCCESS](state, { payload }) {
    return { ...state, currentProfile: payload.profile, isFetching: false, errorMessage: '' };
  },

  [types.FETCHING_PROFILES_SUCCESS](state, { payload }) {
    return { ...state, data: payload.data, total: payload.total, isFetching: false, errorMessage: '' };
  },

  [types.ADD_PROFILE_SUCCESS](state) {
    return { ...state, isFetching: false, errorMessage: '' };
  },

  [types.UPDATE_PROFILE_SUCCESS](state, { payload }) {
    return { ...state, isFetching: false, errorMessage: '', currentProfile: payload.data };
  },

  [types.REMOVE_PROFILE_SUCCESS](state, { payload }) {
    return { ...state, isFetching: false, errorMessage: '', data: state.data.filter(dataItem => {
      if (dataItem.id !== payload.id) {
        return true;
      }

      return false;
      })
    };
  },

  [combineActions(
    types.FETCHING_PROFILE_FAILED,
    types.FETCHING_PROFILES_FAILED,
    types.ADD_PROFILE_FAILED,
    types.UPDATE_PROFILE_FAILED,
    types.REMOVE_PROFILE_FAILED
  )](state, { payload }) {
    return handleError(state, payload);
  }
}, initialState);

// Note: Is state become more verbose and data store mutations become more predictable
// with redux-actions compared to "classy" way?

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.FETCHING_PROFILES_START:
//     case types.ADD_PROFILE_START:
//     case types.UPDATE_PROFILE_START:
//     case types.REMOVE_PROFILE_START:
//       return handleStart(state, action);

//     case types.FETCHING_PROFILE_START:
//       return { ...state, isFetching: true, currentProfile: null, errorMessage: '' }

//     case types.FETCHING_PROFILE_SUCCESS:
//       return { ...state, currentProfile: action.data, isFetching: false, errorMessage: '' };

//     case types.FETCHING_PROFILES_SUCCESS:
//       return { ...state, data: action.data, total: action.total, isFetching: false, errorMessage: '' };

//     case types.ADD_PROFILE_SUCCESS:
//       return { ...state, isFetching: false, errorMessage: '' };

//     case types.UPDATE_PROFILE_SUCCESS:
//       return { ...state, isFetching: false, errorMessage: '', currentProfile: action.data };

//     case types.REMOVE_PROFILE_SUCCESS:
//       return { ...state, isFetching: false, errorMessage: '', data: state.data.filter(dataItem => {
//         if (dataItem.id !== action.id) {
//           return true;
//         }

//         return false;
//         })
//       };

//     case types.FETCHING_PROFILE_FAILED:
//     case types.FETCHING_PROFILES_FAILED:
//     case types.ADD_PROFILE_FAILED:
//     case types.UPDATE_PROFILE_FAILED:
//     case types.REMOVE_PROFILE_FAILED:
//       return handleError(state, action);

//     default:
//       return state;
//   }
// };

export default reducer;