import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './Components/Redux/Reducers/app'

const initialState = {
    items:[],
    titles:[],
    preLoader:[],
    lastId:0,
    InputLog:"",
    Output:""
}

const store = createStore(
    app,
    initialState
)

ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>,
    document.getElementById('root')
)

