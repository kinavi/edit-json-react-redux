import React,{Component} from 'react';
import PropTypes from 'prop-types'
import AddUser from '../../Redux/Actions/AddUser'


// class InputField extends Component{

//     constructor(props) {
//         super(props)
//         this.state={
//             //value:'',
//             strLog:'',
//             isHide:props.isHide,
//         }
//         this.onChange=this.onChange.bind(this)
//         this.switchHide=this.switchHide.bind(this)
//         this.cleartextarea=this.cleartextarea.bind(this)
//     }

//     switchHide() {
        
//         const {isHide} = this.state
//         console.log(!isHide)
//         this.setState({isHide:!isHide})
//     }

//     static propTypes = {
//         strInput:PropTypes.string,
//         strLog:PropTypes.string,
//         isHide:PropTypes.bool
//     }

//     onChange(){
//         const {value} = this.textarea
//         const {onSetCards} = this.props
//         const {switchHide,cleartextarea} = this
//         if(IsJsonString(value)){
//             const json = JSON.parse(value)
//             cleartextarea()
//             onSetCards(json)
//             switchHide()
//         }
//         else if(value!=='')
//         {
//             this.setState({strLog:'Не верный формат!'})
//         }
//         else
//             this.setState({strLog:''})     
//     }

//     getInputRef = (node)=>{this.textarea=node}
//     cleartextarea = () => {this.textarea.value=''}

//     render(){
//         const {getInputRef, onChange, switchHide} = this
//         const {strLog, isHide} = this.state
//         return(
//             <div>
//                 <div hidden={isHide}>
//                     <button onClick={switchHide}>Ввод данных</button>
//                 </div>
//                 <div hidden={!isHide}>
//                     <div>Ведите данные JSON: </div>
//                     <textarea ref={getInputRef} onInput={onChange} name="comment" cols="40" rows="3"></textarea>
//                     <div>{strLog}</div>
//                 </div>
//             </div>
//         )
//     }
// }

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// Old Ver.
//()=>setCardsParseJSON(this._ref.value)
const InputField = ({store})=>{
    let tafield

    const onAddUser=()=>{
        //console.log(tafield.value)
        //console.log(IsJsonString(tafield.value))
        //(id, name, email, config, timer, flags, dateactivate)
        if(IsJsonString(tafield.value))
        {
            const reasul = JSON.parse(tafield.value)
            //console.log(reasul)
            if(Array.isArray(reasul))
                reasul.map(u=>
                    store.dispatch(
                        AddUser(
                            u.id,
                            u.name,
                            u.email,
                            u.config_bool,
                            u.timer_integer,
                            u.flags,
                            u.dateactivate
                        )
                    )
                )

            else
                store.dispatch(
                    AddUser(
                        reasul.id,
                        reasul.name,
                        reasul.email,
                        reasul.config_bool,
                        reasul.timer_integer,
                        reasul.flags,
                        reasul.dateactivate
                    )
                )         
        }
    }

    return(
        <div>
            <div>Ведите данные JSON: </div>
            <textarea ref={ta=>tafield=ta} name="comment" cols="40" rows="3"></textarea>
            <div>
                <button onClick={onAddUser}>Add</button>
            </div>
            
            {/* <div hidden={!IsJsonString(this.tafield.value)}>Ошибка ввода</div> */}
        </div>
    )
}

export default InputField