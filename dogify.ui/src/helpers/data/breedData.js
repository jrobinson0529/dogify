import axios from 'axios';
import apiConfig from '../apiKeys';

const url = apiConfig.apiUrl;
const getSingleBreed = (id) => new Promise((resolve, reject) => {
  axios.get(`${url}/Breed/${id}`).then((response) => resolve(response.data)).catch(reject);
});

export default getSingleBreed;
