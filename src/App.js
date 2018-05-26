import React from 'react';
import { connect } from 'react-redux'
import  axios from 'axios'

class App extends React.Component{
    componentDidMount(){
        axios.get('/data')
        .then(res=>{
            console.log(res)
        })
    }
    render(){
        return <h1>53456465</h1>
    }
}


export default App;