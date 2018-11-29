import { API_URL } from './constants';
import axios from 'axios';
import store from '../store';

export default async ({ method = 'GET', data, headers, params, endpoints }) => {
  const myHeaders = store.getState().user.isAuth
    ? {
      ...headers,
      Authorization: store.getState().user.info.token,
    } : headers;
  return await axios({
    method,
    url: `${API_URL}${endpoints}`,
    data,
    params,
    headers: myHeaders,
  });
};