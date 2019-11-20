import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { createStore, combineReducers} from 'redux'
import Users  from './Components/Redux/Reducers/Users'
import stateData from './Data/userApi.json'
import { Provider } from 'react-redux'
import {Titles} from './Components/Redux/Redux_v2/Reducers/Titles'
import IsJsonFormat from './Components/Library' 
// const initialState = {
//     Users:stateData
// } 

// function getData(value){
//     if(IsJsonFormat(value))
//     {
//         const result = JSON.parse(value) 
//         if(Array.isArray(result))
//         {
//             reasul.map(u=>
//                 store.dispatch(
//                     AddUser(
//                         u.id,
//                         u.name,
//                         u.email,
//                         u.config_bool,
//                         u.timer_integer,
//                         u.flags,
//                         u.dateactivate
//                     )
//                 )
//             )
                    
//         }
//     }
// }


const initialState = {
    Titles:['id','name','mail'],
    Items:[
        {
            id:101,
            name:'Vova'
        }
    ],
    IsHide:{}
}

const store = createStore(
    combineReducers({ Titles }),
    initialState
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

//store.subscribe(render)


// const render = () =>
//     ReactDOM.render(
//         <Provider store={store}>
//             <App/>
//         </Provider>
//         ,
//         document.getElementById('root')
//     )

// store.subscribe(render)
// render()
