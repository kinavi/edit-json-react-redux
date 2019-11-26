import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { createStore, combineReducers} from 'redux'
//import Users  from './Components/Redux/Reducers/Users'
//import stateData from './Data/userApi.json'
import { Provider } from 'react-redux'
//import {Titles} from './Components/Redux/Redux_v2/Reducers/Titles'
//import IsJsonFormat from './Components/Library' 

//import {Basket} from './Components/Redux/Redux_v3/Reducers/Basket'
import {items} from './Components/Redux_v3/Reducers/Items'
import {mask} from './Components/Redux_v3/Reducers/titles'
import testData from './Data/testData.json'
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

// const onAddUser=(data)=>{

//     if(IsJsonString(data))
//     {
//         const result = JSON.parse(data)
//         //console.log(reasul)
//         if(Array.isArray(result))
//         result.map(u=>
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

//         else
//             store.dispatch(
//                 AddUser(
//                     result.id,
//                     result.name,
//                     result.email,
//                     result.config_bool,
//                     result.timer_integer,
//                     result.flags,
//                     result.dateactivate
//                 )
//             )         
//     }
// }
    

function getAllKeys(obj){
    return Object.keys(obj)
}

// Array.isArray(reasul)

// function getItems(){
//     return [...]
// }

// function getItem(){
//     return {
//         cells:[...],
//         id:
//     }
// }

// function getCells(){
//     return [...]
// }

// function getCell(){
//     return {
//         value:150,
//         key:'id',
//         isEdit:false
//     }
// }


const initialState = {
    items:[
        {
            cells:[
                {
                    value:150,
                    key:'id',
                    isEdit:false,
                },
                {
                    value:'Vova',
                    key:'name',
                    isEdit:false,
                },
                {
                    value:'www@www.ww',
                    key:'email',
                    isEdit:false,
                }
            ],
            id:5
        },
        {
            cells:[
                {
                    value:15,
                    key:'id',
                    isEdit:false,
                },
                {
                    value:'Vasa',
                    key:'name',
                    isEdit:false,
                },
                {
                    value:'w2ww@www.ww',
                    key:'email',
                    isEdit:false,
                }
            ],
            id:1
        }
    ],
    titles:[
        'email', 'id','time','name'
    ]
    // Titles:['id','name','mail'],
    // Items:[
    //     {
    //         id:101,
    //         name:'Vova'
    //     }
    // ],
    // IsHide:{}
}

const store = createStore(
    combineReducers({ items, mask }),
    initialState
)

ReactDOM.render(
    <Provider store={store}>
        <App /> {console.log(store.getState())}
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
