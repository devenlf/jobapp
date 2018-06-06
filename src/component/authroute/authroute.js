import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router';
@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        axios.get('/user/info')
        .then(res=>{
            if(res.status===200){
               if(res.data.code===0){
                   //有登陆信息
               }else{
                this.props.history.push('/login');
               }
            }
        })
    }

    render(){
        return <p>判断跳转</p>
    }
}

export default AuthRoute