import { extendObservable, action } from 'mobx';

import { getProfileById, getProfiles, updateProfileById, removeProfileById, addProfile as addNewProfile } from './profileProvider';

export class ProfileStore {
  constructor() {
    extendObservable(this, {
      data: [],
      total: null,
      isFetching: false,
      errorMessage: '',
      currentProfile: null
    })
  }

  @action
  handleStart() {
    this.isFetching = true;
    this.errorMessage = '';
  }

  @action
  handleError(error) {
    this.isFetching = false;
    this.errorMessage = error;
  }

  @action
  fetchingProfileStart() {
    this.isFetching = true;
    this.currentProfile = null;
    this.errorMessage = '';
  }

  @action
  fetchingProfileSuccess(profile) {
    this.isFetching = false;
    this.currentProfile = profile;
    this.errorMessage = '';
  }

  @action
  fetchingProfileFailed(error) {
    this.isFetching = false;
    this.errorMessage = error;
  }

  @action
  fetchProfile(id) {
    this.fetchingProfileStart();
  
    return getProfileById(id)
      .then(profile => this.fetchingProfileSuccess(profile))
      .catch(err => this.fetchingProfileFailed(err));
  }

  @action
  fetchingProfilesStart() {
    this.handleStart();
  }

  @action
  fetchingProfilesSuccess({ data, total }) {
    this.data = data;
    this.total = total;
    this.isFetching = false;
    this.errorMessage = '';
  }

  @action
  fetchingProfilesFailed(err) {
    this.handleError(err);
  }

  @action
  fetchProfiles(options) {
    this.fetchingProfilesStart();
  
    return getProfiles(options)
      .then(profiles => this.fetchingProfilesSuccess(profiles))
      .catch(err => this.fetchingProfilesFailed(err));
  }

  @action
  addProfileStart() {
    this.handleStart();
  }
  
  @action
  addProfileSuccess() {
    this.isFetching = false;
    this.errorMessage = '';
  }
  
  @action
  addProfileFailed(err) {
    this.handleError(err);
  }

  @action
  addProfile(profile) {
    this.addProfileStart();

    return addNewProfile(profile)
      .then(_ => this.addProfileSuccess())
      .catch(err => this.addProfileFailed(err));
  }

  @action
  updateProfileStart() {
    this.handleStart();
  }

  @action
  updateProfileSuccess({ data }) {
    this.isFetching = false;
    this.errorMessage = '';
    this.currentProfile = data;;
  }

  @action
  updateProfileFailed(err) {
    this.handleError(err);
  }

  @action
  updateProfile(id, profile) {
    this.updateProfileStart();
  
    return updateProfileById(id, profile)
      .then(profile => this.updateProfileSuccess(profile))
      .catch(err => this.updateProfileFailed(err));
  }

  @action
  removeProfileStart() {
    this.handleStart();
  }

  @action
  removeProfileSuccess(id) {
    this.isFetching = false;
    this.errorMessage = '';
    this.data = this.data.filter(dataItem => {
      if (dataItem.id !== id) {
        return true
      }

      return false
    })
  }

  @action
  removeProfileFailed(err) {
    this.handleError(err);
  }

  @action
  removeProfile(id) {
    this.removeProfileStart();
  
    return removeProfileById(id)
      .then(profiles => this.removeProfileSuccess(id))
      .catch(err => this.removeProfileFailed(err));
  }
}

export default new ProfileStore();