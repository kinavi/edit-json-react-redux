//import React from 'react'
//import ReactDOM from 'react-dom';
// import CreateUser from './createUser'
// import userApi from './Data/userApi.json'
// import style from './style.css'
//import App from './Components/App';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
//import storeFactory from './Components/Redux/Store'
import { createStore, combineReducers} from 'redux'
import Users  from './Components/Redux/Reducers/Users'
import stateData from './Data/userApi.json'

const initialState = {
    Users:stateData
} 
// const initialState = {
//     Users:[{
//         value: stateData[0],
//         isEdit: false
//     },
//     {
//         value: stateData[1],
//         isEdit: false
//     }]
// }

const store = createStore(
    combineReducers({ Users }),
    initialState
)
//console.dir(store)
const render = () =>
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )

store.subscribe(render)
render()

//#region old
// class MainPage extends Component{
//     render(){

//         const data = this.props; 

//         return(
//             <div>
                
//                 <button>Create user</button>
//             </div>
//         )
//     }
// }

// class Example extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             //cards: userApi,
//             value:'',
//             isHide:false,
//             strJSON:''
//         }
//         //this.taRef = React.createRef();
//         //this.removeCard=this.removeCard.bind(this)
//         this.setCardsParseJSON=this.setCardsParseJSON.bind(this)
//     }

//     componentDidMount() {  
//       // React 15
//       console.log(this.refs._ref.value);
//     }

//     setCardsParseJSON(){
//         const value = this.refs._ref.value
//         this.setState({value})
//     }

//     render() {
//         const {setCardsParseJSON}=this
//       return <textarea ref='_ref' onInput={setCardsParseJSON}/>;
//     }
  
//   }


//ReactDOM.render(<App/>,document.getElementById('root'))
//ReactDOM.render(<MainPage json={userApi} />,document.getElementById('root'))
//#endregion