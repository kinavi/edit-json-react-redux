import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { createStore, combineReducers} from 'redux'
import Users  from './Components/Redux/Reducers/Users'
import stateData from './Data/userApi.json'

const initialState = {
    Users:stateData
} 

const store = createStore(
    combineReducers({ Users }),
    initialState
)

const render = () =>
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )

store.subscribe(render)
render()
