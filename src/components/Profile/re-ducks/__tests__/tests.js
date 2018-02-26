import { 
  fetchingProfileStart,
  fetchingProfileSuccess,
  fetchingProfileFailed,
  fetchingProfilesStart,
  fetchingProfilesSuccess,
  fetchingProfilesFailed,
  addProfileStart,
  addProfileSuccess,
  addProfileFailed,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailed,
  removeProfileStart,
  removeProfileSuccess,
  removeProfileFailed } from '../actions';
import { profileTypes, profileReducer } from '..';

const createActionObject = (type, payload, meta) => {
  return {
    type,
    ...payload && { payload },
    ...meta && { meta },
  }
};
const initialState = {
  data: [],
  total: null,
  isFetching: false,
  errorMessage: '',
  currentProfile: null
};
const testError = 'Test error';

describe('testing profile actions', () => {
  describe('fetching profile', () => {
    test('should fetching profile start', () => {
      const action = createActionObject(profileTypes.FETCHING_PROFILE_START);
  
      expect(fetchingProfileStart()).toEqual(action);
    });
  
    test('should fetching profile success', () => {
      const payload = { id: 1, name: 'Test name' };
      const action = createActionObject(profileTypes.FETCHING_PROFILE_SUCCESS, { profile: payload });
  
      expect(fetchingProfileSuccess(payload)).toEqual(action);
    });
  
    test('should fetching profile failed', () => {
      const action = createActionObject(profileTypes.FETCHING_PROFILE_FAILED, { error: testError });
  
      expect(fetchingProfileFailed(testError)).toEqual(action);
    });
  });

  describe('fetching profiles', () => {
    test('should fetching profiles start', () => {
      const action = createActionObject(profileTypes.FETCHING_PROFILES_START);
  
      expect(fetchingProfilesStart()).toEqual(action);
    });
  
    test('should fetching profiles success', () => {
      const payload = { data: [], total: 0 };
      const action = createActionObject(profileTypes.FETCHING_PROFILES_SUCCESS, { data: payload.data, total: payload.total });
  
      expect(fetchingProfilesSuccess(payload)).toEqual(action);
    });
  
    test('should fetching profiles failed', () => {
      const action = createActionObject(profileTypes.FETCHING_PROFILES_FAILED, { error: testError });
  
      expect(fetchingProfilesFailed(testError)).toEqual(action);
    });
  });

  describe('adding profile', () => {
    test('should add profiles start', () => {
      const action = createActionObject(profileTypes.ADD_PROFILE_START);
  
      expect(addProfileStart()).toEqual(action);
    });
  
    test('should add profiles success', () => {
      const payload = { id: 100 };
      const action = createActionObject(profileTypes.ADD_PROFILE_SUCCESS, payload);
  
      expect(addProfileSuccess(payload)).toEqual(action);
    });
  
    test('should add profiles failed', () => {
      const action = createActionObject(profileTypes.ADD_PROFILE_FAILED, { error: testError });
  
      expect(addProfileFailed(testError)).toEqual(action);
    });
  });

  describe('updating profile', () => {
    test('should update profiles start', () => {
      const action = createActionObject(profileTypes.UPDATE_PROFILE_START);
  
      expect(updateProfileStart()).toEqual(action);
    });
  
    test('should update profiles success', () => {
      const payload = { id: 2, name: 'Test name' };
      const action = createActionObject(profileTypes.UPDATE_PROFILE_SUCCESS, { data: payload });
  
      expect(updateProfileSuccess(payload)).toEqual(action);
    });
  
    test('should update profiles failed', () => {
      const action = createActionObject(profileTypes.UPDATE_PROFILE_FAILED, { error: testError });
  
      expect(updateProfileFailed(testError)).toEqual(action);
    });
  });

  describe('removing profile', () => {
    test('should remove profiles start', () => {
      const action = createActionObject(profileTypes.REMOVE_PROFILE_START);
  
      expect(removeProfileStart()).toEqual(action);
    });
  
    test('should remove profiles success', () => {
      const payload = { id: 1 };
      const action = createActionObject(profileTypes.REMOVE_PROFILE_SUCCESS, { id: payload });
  
      expect(removeProfileSuccess(payload)).toEqual(action);
    });
  
    test('should remove profiles failed', () => {
      const action = createActionObject(profileTypes.REMOVE_PROFILE_FAILED, { error: testError });
  
      expect(removeProfileFailed(testError)).toEqual(action);
    });
  });
});


describe('testing profile reducer', () => {
  test('should return initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle start actions', () => {
    const expectState = {
      ...initialState,
      isFetching: true,
      errorMessage: ''
    };

    const fetchingAction = createActionObject(profileTypes.FETCHING_PROFILES_START);
    const addAction = createActionObject(profileTypes.ADD_PROFILE_START);
    const updateAction = createActionObject(profileTypes.UPDATE_PROFILE_START);
    const removeAction = createActionObject(profileTypes.REMOVE_PROFILE_START);

    expect(profileReducer(initialState, fetchingAction)).toEqual(expectState);
    expect(profileReducer(initialState, addAction)).toEqual(expectState);
    expect(profileReducer(initialState, updateAction)).toEqual(expectState);
    expect(profileReducer(initialState, removeAction)).toEqual(expectState);
  });

  test('should handle fetching profile start', () => {
    const expectState = {
      ...initialState,
      isFetching: true,
      currentProfile: null,
      errorMessage: ''
    };

    const action = createActionObject(profileTypes.FETCHING_PROFILE_START);

    expect(profileReducer(initialState, action)).toEqual(expectState);
  })

  test('should handle failed actions', () => {
    const expectState = {
      ...initialState,
      isFetching: false,
      errorMessage: testError
    };
    const error = { error: testError };

    const fetchingAction = createActionObject(profileTypes.FETCHING_PROFILE_FAILED, error);
    const fetchingProfilesAction = createActionObject(profileTypes.FETCHING_PROFILES_FAILED, error);
    const addAction = createActionObject(profileTypes.ADD_PROFILE_FAILED, error);
    const updateAction = createActionObject(profileTypes.UPDATE_PROFILE_FAILED, error);
    const removeAction = createActionObject(profileTypes.REMOVE_PROFILE_FAILED, error);

    expect(profileReducer(initialState, fetchingAction)).toEqual(expectState);
    expect(profileReducer(initialState, fetchingProfilesAction)).toEqual(expectState);
    expect(profileReducer(initialState, addAction)).toEqual(expectState);
    expect(profileReducer(initialState, updateAction)).toEqual(expectState);
    expect(profileReducer(initialState, removeAction)).toEqual(expectState);
  })
});