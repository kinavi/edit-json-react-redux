import { createStore,
    combineReducers,
    applyMiddleware } from 'redux'
import Users  from '../Reducers/Users'
import stateData from '../../../Data/userApi.json'

const storeFactory = () =>
    console.log(JSON.parse(stateData))  
    const json=stateData
    const initialState = {
        Users:json
    }
    console.log(initialState)
    createStore(
    combineReducers({ Users }),
    initialState
    )

export default storeFactory