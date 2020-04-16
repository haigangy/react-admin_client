/*
 *  包含所有接口请求函数的模块
 */
import ajax from './ajax';

const BASE = '';

 //login
 export const loginReq = (username, password) => ajax(BASE+'/login', {username, password}, 'POST');

 //add user
export const addUserReq = (user) => ajax(BASE+'/manage/user/add', user, 'POST');