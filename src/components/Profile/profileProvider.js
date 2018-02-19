import axios from 'axios';

import { URL } from '../../utils/url';

const successCallback = (response => response.data);
const errCallback = (err => err.message);

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

export const updateProfileById = ({ id, profile }) => {
  return axios.patch(`${URL.profiles}/${id}`, profile)
    .then(successCallback)
    .catch(errCallback)
}

export const getProfiles = () => {
  return axios.get(URL.profiles)
    .then(successCallback)
    .catch(errCallback)
}

export const getProfileById = (id) => {
  return axios.get(`${URL.profiles}/${id}`)
    .then(successCallback)
    .catch(errCallback)
}
