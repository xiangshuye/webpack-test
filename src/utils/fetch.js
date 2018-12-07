import axios from 'axios';
import code from '@/config/statusCode'

let fetch = axios.create({
    baseURL: 'http://192.168.1.49:3000',
    timeout: 10000,
    withCredentials: true,
})


export default fetch;
