import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux' ;
import App from './App.js';


ReactDom.render(<App/>,document.getElementById('root'));
