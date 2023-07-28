import axios from 'axios';
import { API_URL } from './constants';

export const requestToServer = (data, method) => {
  const url = getUrl(method, data);
  console.log('req', url, data);
  return axios(url, {
    data,
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
const getUrl = (method, requestData) => {
  let url = API_URL;
  if (method === 'DELETE' || method === 'PATCH') {
    return url + '/' + requestData.id;
  } else {
    return url;
  }
};
