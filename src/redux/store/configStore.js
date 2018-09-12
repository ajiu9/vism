/**
 * 引入createStore创建store，引入applyMiddleware 来使用中间件
 */

import {createStore, applyMiddleware} from 'redux'
import reducer from './../reducer'

import {composeWithDevTools} from 'redux-devtools-extension' // 调试工具

const configureStore = () => createStore(reducer, composeWithDevTools())

export default configureStore