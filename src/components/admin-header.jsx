import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import Memory from '../utils/memory';
import Storage from '../utils/localStorage';
import { getWeatherReq } from '../api';
import { formatDate } from '../utils/fommater';
import navList from '../config/nav-bar-config';

const {confirm} = Modal;

let timer;
class AdminHeader extends Component {

    state = {
        pageTitle: 'Title',
        time: '2020-4-16 20:20:20',
        weather: {},
        modalVisible: false
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };


    handleLogout = () => {
        this.showConfirm();
        
    }

     showConfirm() {
        let history = this.props.history;
        confirm({
          title: '确定退出登录吗?',
          icon: <ExclamationCircleOutlined />,
          content: '',
          okType: 'danger',
          okText: '确认',
          cancelText: '取消',
          onOk() {
            console.log('OK');
            Memory.user = {};
            Storage.removeUserFromLocal('user_key');
            history.go('/login');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

    getTitle = (list) => {
        if (!list) return '';
        const path = this.props.location.pathname;
        let title;
        list.forEach(item => {
            if (item.key === path) {
                title = item.title;
            } else if (item.children) {
                let cItem = item.children.find((cItem) => cItem.key === path);
                if (cItem) title = cItem.title;
            }
        });
        return title;
    }

    componentDidMount() {
        timer = setInterval(() => {
            let time = formatDate(Date.now());
            console.log('timer is running...', time);
            this.setState({
                time
            });
        }, 1000);
        getWeatherReq()
            .then((res) => {
                this.setState({
                    weather: res
                });
            })
            .catch((err) => {
                console.log(err);
            });

    }

    componentWillUnmount() {
        clearInterval(timer);
    }
    render() {
        const title = this.getTitle(navList);
        console.log(title)
        return (
            <div>
                <div className="top-line">
                    <span className="top-line-content">
                        欢迎，{this.props.username}
                        <a href="#" onClick={this.handleLogout}>
                            &nbsp;&nbsp;退出
                        </a>
                    </span>
                </div>
                <div className="bottom-line">
                    <div className="bottom-line-left">{title}</div>
                    <div className="bottom-line-right ">
                        <span className="time"> {this.state.time} </span>
                        <span className="weather">
                            <span>白天:
                                <span style={{ color: "green" }}>{this.state.weather.dayweather}</span>
                            </span> &nbsp;&nbsp;
                            <span>晚上:
                                <span style={{ color: "green" }}>{this.state.weather.nightweather}</span>
                            </span>&nbsp;&nbsp;
                            <span>温度:
                                <span style={{ color: "green" }}>{this.state.weather.nighttemp + '-' + this.state.weather.daytemp + ' 摄氏度'}</span>
                            </span>
                        </span>
                    </div>

                </div>
            </div >
        )
    }
}

export default withRouter(AdminHeader);