/*
 *  包含所有接口请求函数的模块
 */
import ajax from './ajax';
import jsonp from 'jsonp';
import {message} from 'antd';

const BASE = '';

 //login
 export const loginReq = (username, password) => ajax(BASE+'/login', {username, password}, 'POST');

 //add user
export const addUserReq = (user) => ajax(BASE+'/manage/user/add', user, 'POST');

export const getWeatherReq = () => {
    const url = 'https://api.asilu.com/weather_v2/';

    return new Promise((resolve, reject) => {
        jsonp(url, {}, (err, data) => {
            if (!err && data.status === '1') {
                resolve(data.forecasts[0].casts[0]);
            } else {
                message.error('获取天气失败');
            }
        })
    })

    

}