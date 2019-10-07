import axios from 'axios';
import code from '@/config/statusCode'

/*
 * 对 axios 进行封装，可以利用拦截器功能对发送数据和返回数据进行处理，或其他操作
 * 比如：使用 token 进行身份验证
*/

let fetch = axios.create({
    baseURL: 'http://localhost:3002/api/',
    timeout: 10000,
    withCredentials: true,
})

fetch.interceptors.response.use(res => {
    return res.data;
})


export default fetch;
