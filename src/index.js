import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, redirect, Switch } from 'react-router-dom'
import Login from './container/login/login.js';
import Register from './container/register/register.js';
import reducers from './reducer.js'
import AuthRoute from './component/authroute/authroute.js';
import './config'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    // window.devToolsExtension?window.devToolsExtension():f=>f
));

ReactDom.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
