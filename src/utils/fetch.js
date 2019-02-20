import axios from 'axios';
import code from '@/config/statusCode'

/*
 * 对 axios 进行封装，可以利用拦截器功能对发送数据和返回数据进行处理，或其他操作
 * 比如：使用 token 进行身份验证
*/

let fetch = axios.create({
    baseURL: 'http://192.168.1.49:3000',
    timeout: 10000,
    withCredentials: true,
})


export default fetch;
