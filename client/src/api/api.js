import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',  // Backend server address
});

export default api;