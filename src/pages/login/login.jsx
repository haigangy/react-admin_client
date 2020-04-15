import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../../assets/css/login.less';
import logo from '../../assets/img/logo.png';

export default class Login extends React.Component {
    formRef = React.createRef();
    onFinish = values => {
        console.log('Received values of form: ', values);
      };
    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统</h1>
                </header>
                <section className='login-panel'>
                    <h1>用户登陆</h1>
                    <div>
                        <Form ref={this.formRef} name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={this.onFinish}>
                            <Form.Item name="username" rules={[
                                {required: true, message: '请输入用户名'}, 
                                {min: 4, message: '用户名必须大于4个字符'}, 
                                {max: 12, message: '用户名必须小于12个字符'}, 
                                {pattern: /^[a-zA-Z0-9_]+/g, message: '用户名只能包含数字、字母或下划线'}]} >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>

                            <Form.Item name="password" rules={[
                                {required: true, message: '请输入密码'},
                                {min: 4, message: '密码必须大于4个字符'}, 
                                {max: 12, message: '密码必须小于12个字符'}, 
                                {pattern: /^[a-zA-Z0-9_]+/g, message: '密码只能包含数字、字母或下划线'}]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登陆 </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}