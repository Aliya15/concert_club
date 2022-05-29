import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/aliya15/concert_club'
});

export default apiClient;
