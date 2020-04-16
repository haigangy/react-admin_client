import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';

import navList from '../config/nav-bar-config';

const { SubMenu } = Menu;

class NavBar extends Component {
    constructor(){
        super();
    }

    getNavNodes = list => {
        const curPath = this.props.location.pathname;
        return list.map((item) => {
            if (!item.children) {
                return (<Menu.Item key={item.key}>
                    <Link to={item.key}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>)
            } else {
                let cItem = item.children.find(cItem => cItem.key === curPath);
                if(cItem) {
                    this.openkey = item.key
                }
                return (
                    <SubMenu 
                        key={item.key} 
                        title= {
                            <span>
                                {item.icon}
                                <span>{item.title}</span>
                            </span>
                        } >
                    {this.getNavNodes(item.children)}
                    </SubMenu>
                )
            }
        });
    }

    componentWillMount(){
        this.navList = this.getNavNodes(navList);
    }

    render() {
        const curPath = this.props.location.pathname;
        return (
            <div>
                <Link to="/">
                    <header className="nav-header">
                        <img src={logo} alt="logo" />
                        <h1>管理后台</h1>
                    </header>
                </Link>
                <Menu mode="inline" theme="dark" selectedKeys={[curPath]} defaultOpenKeys= {[this.openkey]} >
                    {this.navList}
                </Menu>
            </div>
        )
    }
}

export default withRouter(NavBar);