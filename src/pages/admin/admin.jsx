import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Memory from '../../utils/memory';
import '../../assets/css/admin.less';
import NavBar from '../../components/admin-nav-bar';
import AdminHeader from '../../components/admin-header';
import Home from '../admin-main/home/home';
import Product from '../admin-main/product/product';
import Categary from '../admin-main/categary/categary';
import Role from '../admin-main/role/role';
import BarChart from '../admin-main/bar-chart/barchart';
import LineChart from '../admin-main/line-chart/linechart';
import PieChart from '../admin-main/pie-chart/piechart';
import User from '../admin-main/user/user';
import Order from '../admin-main/order/order';

const { Header,Footer, Sider, Content } = Layout;

export default class Admin extends React.Component {
    render() {
        // console.log('user from local: ',Storage.getUserFromLocal());
        const user = Memory.user;
        if (!user || !user._id) {
            return <Redirect to="/login" /> // 在render里面实现跳转 不能用history。push
        }
        return (
            <Layout className="wrap">
                <Sider className="nav-bar">
                    <NavBar />
                </Sider>
                <Layout>
                    <Header className="header">
                        <AdminHeader username={user.username}/>
                    </Header>
                    <Content className="content">
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/product" component={Product}/>
                            <Route path="/categary" component={Categary}/>
                            <Route path="/user" component={User}/>
                            <Route path="/role" component={Role}/>
                            <Route path="/bar" component={BarChart}/>
                            <Route path="/line" component={LineChart}/>
                            <Route path="/pie" component={PieChart}/>
                            <Route path="/order" component={Order}/>
                            <Redirect to="/home" />
                        </Switch>
                    </Content>
                    <Footer className="footer">
                        <p>Posted by: Haigang Yang</p>
                        <p>Contact information: <a href="mailto:haigangy@outlook.com">haigangy@outlook.com</a>.</p>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}