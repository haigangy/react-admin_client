import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Memory from '../utils/memory';
import Storage from '../utils/localStorage';

let timer;
class AdminHeader extends Component {
    constructor(){
        super();
        this.state = {
            time: '2020-4-16 20:20:20'
        }
    }

    handleLogout = () => {
        Memory.user = {};
        Storage.removeUserFromLocal('user_key');
    }
    componentDidMount(){
        // timer = setInterval(() => {
        //     const date = new Date();
        //     let time = date.getFullYear() + '-'+ date.getMonth() + '-' +date.getDay() + ' ' + date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        //     console.log('timer is running...',time);
        //     this.setState({
        //         time
        //     });
        // }, 1000);
    }

    componentWillUnmount(){
        clearInterval(timer);
    }
    render() {
        return (
            <div>
                <div className="top-line">
                    <p className="top-line-content">
                        欢迎，{this.props.username}
                        <Link onClick={this.handleLogout} to="/login">
                            &nbsp;&nbsp;退出
                        </Link>
                    </p>
                </div>
                <div className="bottom-line">
                    <h1 className="title"></h1>
                    <div className="time-weather ">
                        <span className="time"> {this.state.time} </span>
                        <span className="weather">weather</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default AdminHeader;