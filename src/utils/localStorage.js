/* 用来存储数据到local storage的工具模块
*/
const USER_KEY = 'user_key';
export default {
    saveUserToLocal(user){
        localStorage.setItem(USER_KEY,JSON.stringify(user));
    },
    getUserFromLocal(){
        return JSON.parse(localStorage.getItem(USER_KEY) || '{}');
    },
    removeUserFromLocal(){
        localStorage.removeItem(USER_KEY);
    }
}