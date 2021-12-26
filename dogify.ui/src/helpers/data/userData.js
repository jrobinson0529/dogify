import axios from 'axios';
import apiConfig from '../apiKeys';

const url = apiConfig.apiUrl;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${url}/User`).then((response) => resolve(response.data)).catch(reject);
});
const createUser = (userInfoObject) => new Promise((resolve, reject) => {
  axios.post(`${url}/User`, userInfoObject).then((response) => resolve(response.data)).catch(reject);
});
const getSingleUserById = (id) => new Promise((resolve, reject) => {
  axios.get(`${url}/User/${id}`).then((response) => resolve(response.data)).catch(reject);
});
const getSingleUserByGoogleId = (id) => new Promise((resolve, reject) => {
  axios.get(`${url}/User/google-id/${id}`).then((response) => resolve(response.data)).catch(reject);
});
const updateUser = (id, userObject) => new Promise((resolve, reject) => {
  axios.put(`${url}/User/${id}`, userObject).then((response) => resolve(response.data)).catch(reject);
});

export {
  getSingleUserByGoogleId,
  createUser,
  getSingleUserById,
  updateUser,
  getUsers,
};
