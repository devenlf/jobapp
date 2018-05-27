import React from 'react';
import Logo from '../../component/logo/logo.js'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Login extends React.Component {
    constructor(props) {
        super(props);
        // this.props =props;
    }

    register() {
        console.log(this.props)
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>我是登陆页面</h2>
                <List>
                    <InputItem>用户</InputItem>
                    
                    <InputItem>密码</InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button type='primary'>登陆</Button>
                    <WhiteSpace />
                    <Button onClick={() => this.register()} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;