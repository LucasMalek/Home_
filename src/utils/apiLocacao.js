import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/v1/aluguel'
});

export default instance;
