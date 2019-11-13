import React from 'react'
import ReactDOM from 'react-dom';
// import CreateUser from './createUser'
// import userApi from './Data/userApi.json'
// import style from './style.css'
import App from './Components/App';

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


ReactDOM.render(<App/>,document.getElementById('root'))
//ReactDOM.render(<MainPage json={userApi} />,document.getElementById('root'))