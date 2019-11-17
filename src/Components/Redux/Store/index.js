import { createStore,
    combineReducers,
    applyMiddleware } from 'redux'
import Users  from '../Reducers/Users'
import stateData from '../../../Data/userApi.json'

// const logger = store => next => action => {
//     let result
//     console.groupCollapsed("dispatching", action.type)
//     console.log('prev state', store.getState())
//     console.log('action', action)
//     result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd()
//     }
// const saver = store => next => action => {
//     let result = next(action)
//     localStorage['redux-store'] = JSON.stringify(store.getState())
//     return result
//     }

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

    



// function IsJsonString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }
    // applyMiddleware(logger, saver)(createStore)(
    // combineReducers({Users}),
    // (localStorage['redux-store']) ?
    // JSON.parse(localStorage['redux-store']) :
    // stateData
    // )
export default storeFactory