import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosApi };
