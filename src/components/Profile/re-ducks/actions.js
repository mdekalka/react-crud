import types from './types';
import { getProfileById, getProfiles, updateProfileById, removeProfileById, addProfile as addNewProfile } from '../profileProvider';

export const fetchProfileStart = () => ({
  type: types.FETCHING_PROFILE_START
})

export const fetchProfileSuccess = (profiles) => ({
  type: types.FETCHING_PROFILE_SUCCESS,
  data: profiles
})

export const fetchProfileFailed = (error) => ({
  type: types.FETCHING_PROFILE_FAILED,
  error
})

export const fetchProfile = () => (dispatch) => {
  dispatch(fetchProfileStart());

  return getProfileById()
    .then(profiles => dispatch(fetchProfileSuccess(profiles)))
    .catch(err => dispatch(fetchProfileFailed(err)));
}

export const fetchProfilesStart = () => ({
  type: types.FETCHING_PROFILE_START
})

export const fetchProfilesSuccess = ({ data, total }) => ({
  type: types.FETCHING_PROFILE_SUCCESS,
  data,
  total
})

export const fetchProfilesFailed = (error) => ({
  type: types.FETCHING_PROFILE_FAILED,
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

export const addProfileSuccess = (profiles) => ({
  type: types.ADD_PROFILE_SUCCESS,
  data: profiles
})

export const addProfileFailed = (error) => ({
  type: types.ADD_PROFILE_FAILED,
  error
})

export const addProfile = () => (dispatch) => {
  dispatch(addProfileStart());

  return addNewProfile()
    .then(profiles => dispatch(addProfileSuccess(profiles)))
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

export const updateProfile = () => (dispatch) => {
  dispatch(updateProfileStart());

  return updateProfileById()
    .then(profiles => dispatch(updateProfileSuccess(profiles)))
    .catch(err => dispatch(updateProfileFailed(err)));
}

export const removeProfileStart = () => ({
  type: types.REMOVE_PROFILE_START
})

export const removeProfileSuccess = (profiles) => ({
  type: types.REMOVE_PROFILE_SUCCESS,
  data: profiles
})

export const removeProfileFailed = (error) => ({
  type: types.REMOVE_PROFILE_FAILED,
  error
})

export const removeProfile = () => (dispatch) => {
  dispatch(removeProfileStart());

  return removeProfileById()
    .then(profiles => dispatch(removeProfileSuccess(profiles)))
    .catch(err => dispatch(removeProfileFailed(err)));
}

export default {
  fetchProfile,
  fetchProfiles,
  addProfile,
  updateProfile,
  removeProfile
}