import React, {PropTypes, Component} from 'react';
import Table from './React/Table/index'
//import InputField from './React/old/InputField'
//import OutputField from './React/old/outputField'
import Input from './React/Input'

// class App extends Component{
    
//     getChildContext() {
//         return {
//             store: this.props.store
//         }
//     }

//     componentWillMount() {
//         this.unsubscribe = store.subscribe(
//             () => this.forceUpdate()
//         )
//     }

//     componentWillUnmount() {
//         this.unsubscribe()
//     }

//     render(){

//         return(
//             <div className="app">
//                 {/* <InputField/> */}
//                 <CardList/>
//                 {/* <OutputField/> */}
//             </div>
//         )
//     }

// }
// App.childContextTypes = {
//     store: PropTypes.object.isRequired
// }

const App = () =>
    <div className="app">
        <Input/>
        <Table/>
        {/* <OutputField/> */}
    </div>
    
export default App
