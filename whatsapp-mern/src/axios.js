import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9000',   //baseURL for any requests we make
});

export default instance;