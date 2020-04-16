import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import Memory from './utils/memory';
import Storage from './utils/localStorage';

//if localstorage中有已登陆过的user， 把user存入内存
const user = Storage.getUserFromLocal();
if(user && user._id){
  Memory.user = user;
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
