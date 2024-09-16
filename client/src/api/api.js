import axios from 'axios';

const API_URL = 'http://localhost:3001/api/items';

export const createItem = (itemData) => axios.post(API_URL, itemData);
export const getItems = () => axios.get(API_URL);
export const getItem = (id) => axios.get(`${API_URL}/${id}`);
export const updateItem = (id, itemData) => axios.put(`${API_URL}/${id}`, itemData);
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
