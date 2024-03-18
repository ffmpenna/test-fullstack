import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:3001/clients',
});

// Conjunto de requisições ao DB.

const requestGet = async (endpoint) => {
  const { data } = await axiosApi.get(endpoint);
  return data;
};

const requestPost = async (endpoint, body) => {
  const { data } = await axiosApi.post(endpoint, body);
  return data;
};

const requestPut = async (endpoint, body) => {
  const { data } = await axiosApi.put(endpoint, body);
  return data;
};

const requestDelete = async (endpoint) => {
  const { data } = await axiosApi.delete(endpoint);
  return data;
};

const api = {
  get: requestGet,
  post: requestPost,
  put: requestPut,
  delete: requestDelete,
}

export default api;
