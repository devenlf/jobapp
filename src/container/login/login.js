import React from 'react';
import Logo from '../../component/logo/logo.js'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux'


@connect(
    state=>state.user,
    {login}
)

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:''
        }
        // this.props =props;
    }

    register() {
        this.props.history.push('/register')
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }

    handleLogin(){
        this.props.login(this.state)
    }

    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>我是登陆页面</h2>
                {this.props.msg?<p>{this.props.msg}</p>:null}
                <List>
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户</InputItem>
                    
                    <InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button onClick={()=>this.handleLogin()}  type='primary'>登陆</Button>
                    <WhiteSpace />
                    <Button onClick={() => this.register()} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;