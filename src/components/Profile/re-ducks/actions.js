import types from './types';
import { getProfileById, getProfiles, updateProfileById, removeProfileById, addProfile as addNewProfile } from '../profileProvider';

export const fetchProfileStart = () => ({
  type: types.FETCHING_PROFILE_START
})

export const fetchProfileSuccess = (profile) => ({
  type: types.FETCHING_PROFILE_SUCCESS,
  data: profile
})

export const fetchProfileFailed = (error) => ({
  type: types.FETCHING_PROFILE_FAILED,
  error
})

export const fetchProfile = (id) => (dispatch) => {
  dispatch(fetchProfileStart());

  return getProfileById(id)
    .then(profile => dispatch(fetchProfileSuccess(profile)))
    .catch(err => dispatch(fetchProfileFailed(err)));
}

export const fetchProfilesStart = () => ({
  type: types.FETCHING_PROFILES_START
})

export const fetchProfilesSuccess = ({ data, total }) => ({
  type: types.FETCHING_PROFILES_SUCCESS,
  data,
  total
})

export const fetchProfilesFailed = (error) => ({
  type: types.FETCHING_PROFILES_FAILED,
  error
})

export const fetchProfiles = (options) => (dispatch) => {
  dispatch(fetchProfilesStart());

  return getProfiles(options)
    .then(profiles => dispatch(fetchProfilesSuccess(profiles)))
    .catch(err => dispatch(fetchProfilesFailed(err)));
}

export const addProfileStart = () => ({
  type: types.ADD_PROFILE_START
})

export const addProfileSuccess = ({ id }) => ({
  type: types.ADD_PROFILE_SUCCESS,
  id
})

export const addProfileFailed = (error) => ({
  type: types.ADD_PROFILE_FAILED,
  error
})

export const addProfile = (profile) => (dispatch) => {
  dispatch(addProfileStart());

  return addNewProfile(profile)
    .then(profileInfo => dispatch(addProfileSuccess(profileInfo)))
    .catch(err => dispatch(addProfileFailed(err)));
}

export const updateProfileStart = () => ({
  type: types.UPDATE_PROFILE_START
})

export const updateProfileSuccess = (profiles) => ({
  type: types.UPDATE_PROFILE_SUCCESS,
  data: profiles
})

export const updateProfileFailed = (error) => ({
  type: types.UPDATE_PROFILE_FAILED,
  error
})

export const updateProfile = (id, profile) => (dispatch) => {
  dispatch(updateProfileStart());

  return updateProfileById(id, profile)
    .then(profile => dispatch(updateProfileSuccess(profile)))
    .catch(err => dispatch(updateProfileFailed(err)));
}

export const removeProfileStart = () => ({
  type: types.REMOVE_PROFILE_START
})

export const removeProfileSuccess = (id) => ({
  type: types.REMOVE_PROFILE_SUCCESS,
  id
})

export const removeProfileFailed = (error) => ({
  type: types.REMOVE_PROFILE_FAILED,
  error
})

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
