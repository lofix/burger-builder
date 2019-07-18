import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cf7d0.firebaseio.com/'
});

export default instance;