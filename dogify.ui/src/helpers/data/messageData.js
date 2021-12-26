import axios from 'axios';
import apiConfig from '../apiKeys';

const url = apiConfig.apiUrl;

const getMessages = () => new Promise((resolve, reject) => {
  axios.get(`${url}/Message`).then((response) => resolve(response.data)).catch(reject);
});
const createMessage = (messageObject) => new Promise((resolve, reject) => {
  axios.post(`${url}/Message`, messageObject).then((response) => resolve(response.data)).catch(reject);
});
const deleteMessage = (messageId) => new Promise((resolve, reject) => {
  axios.delete(`${url}/Message/${messageId}`).then(() => {
    getMessages().then((response) => resolve(response));
  }).catch(reject);
});

export { getMessages, createMessage, deleteMessage };
