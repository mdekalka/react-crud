import axios from 'axios';

import { URL } from '../../utils/url';
import { buildQueryOptions } from './profileUtils';

const successCallback = (response => response.data);
const errCallback = (err => Promise.reject(err.message));

export const addProfile = (profile) => {
  return axios.post(URL.profiles, profile)
    .then(successCallback)
    .catch(errCallback)
}

export const removeProfileById = (id) => {
  return axios.delete(`${URL.profiles}/${id}`)
    .then(successCallback)
    .catch(errCallback)
}

export const updateProfileById = (id, profile) => {
  return axios.patch(`${URL.profiles}/${id}`, profile)
    .then(successCallback)
    .catch(errCallback)
}

export const getProfiles = (options) => {
  const opt = buildQueryOptions(options);

  return axios.get(`${URL.profiles}${opt}`)
    .then(response => ({
      data: response.data,
      total: parseFloat(response.headers['x-total-count'])
    }))
    .catch(errCallback)
}

export const getProfileById = (id) => {
  return axios.get(`${URL.profiles}/${id}`)
    .then(successCallback)
    .catch(errCallback)
}
