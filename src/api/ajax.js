/* 发送异步ajax请求的函数模块
*  封装axios
*/

import axios from 'axios';
import { message } from 'antd';

export default function ajax(url, data={}, method='GET'){
    // 用一个promise包裹， 为了在该函数内处理请求error， 成功resolve， 失败弹出antd message
    return new Promise((resolve)=>{
        let promise;

        if (method === 'GET') {
            promise = axios.get(url, {params: data});
        } else {
            promise = axios.post(url, data);
        }
        
        promise.then(res => {
            resolve(res.data);
        }).catch((err)=>{
            message.error('请求出错： '+ err);
        });
    })
}