import axios from 'axios';

const axiosApi = axios.create({
  baseURL: '/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosApi };
