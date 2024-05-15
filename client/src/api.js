import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mongodb-project-b5c380823b06.herokuapp.com/cars'
});

export default instance;

