import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3001',
    baseURL: process.env.baseURL || 'https://oxigenioapi.herokuapp.com',
});

export default api;