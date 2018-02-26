import { createActions } from 'redux-actions';

import types from './types';
import { getProfileById, getProfiles, updateProfileById, removeProfileById, addProfile as addNewProfile } from '../profileProvider';

export const { fetchingProfileStart, fetchingProfileSuccess, fetchingProfileFailed } = createActions({
  [types.FETCHING_PROFILE_START]: null,
  [types.FETCHING_PROFILE_SUCCESS]: profile => ({ profile }),
  [types.FETCHING_PROFILE_FAILED]: error => ({ error }),
});

export const fetchProfile = (id) => (dispatch) => {
  dispatch(fetchingProfileStart());

  return getProfileById(id)
    .then(profile => dispatch(fetchingProfileSuccess(profile)))
    .catch(err => dispatch(fetchingProfileFailed(err)));
}

export const { fetchingProfilesStart, fetchingProfilesSuccess, fetchingProfilesFailed } = createActions({
  [types.FETCHING_PROFILES_START]: null,
  [types.FETCHING_PROFILES_SUCCESS]: ({ data, total }) => ({ data, total }),
  [types.FETCHING_PROFILES_FAILED]: error => ({ error }),
});

export const fetchProfiles = (options) => (dispatch) => {
  dispatch(fetchingProfilesStart());

  return getProfiles(options)
    .then(profiles => dispatch(fetchingProfilesSuccess(profiles)))
    .catch(err => dispatch(fetchingProfilesFailed(err)));
}

export const { addProfileStart, addProfileSuccess, addProfileFailed } = createActions({
  [types.ADD_PROFILE_START]: null,
  [types.ADD_PROFILE_SUCCESS]: ({ id })=> ({ id }),
  [types.ADD_PROFILE_FAILED]: error => ({ error }),
});

export const addProfile = (profile) => (dispatch) => {
  dispatch(addProfileStart());

  return addNewProfile(profile)
    .then(profileInfo => dispatch(addProfileSuccess(profileInfo)))
    .catch(err => dispatch(addProfileFailed(err)));
}

export const { updateProfileStart, updateProfileSuccess, updateProfileFailed } = createActions({
  [types.UPDATE_PROFILE_START]: null,
  [types.UPDATE_PROFILE_SUCCESS]: data => ({ data }),
  [types.UPDATE_PROFILE_FAILED]: error => ({ error }),
});

export const updateProfile = (id, profile) => (dispatch) => {
  dispatch(updateProfileStart());

  return updateProfileById(id, profile)
    .then(profile => dispatch(updateProfileSuccess(profile)))
    .catch(err => dispatch(updateProfileFailed(err)));
}

export const { removeProfileStart, removeProfileSuccess, removeProfileFailed } = createActions({
  [types.REMOVE_PROFILE_START]: null,
  [types.REMOVE_PROFILE_SUCCESS]: id => ({ id }),
  [types.REMOVE_PROFILE_FAILED]: error => ({ error }),
});

export const removeProfile = (id) => (dispatch) => {
  dispatch(removeProfileStart());

  return removeProfileById(id)
    .then(profiles => dispatch(removeProfileSuccess(id)))
    .catch(err => dispatch(removeProfileFailed(err)));
}

export default {
  fetchProfile,
  fetchProfiles,
  addProfile,
  updateProfile,
  removeProfile
}
