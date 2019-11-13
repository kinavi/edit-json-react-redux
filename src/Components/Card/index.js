import React,{Component} from 'react';
import './style.css'

class Color extends Component{

    constructor(props){
        super(props)
        this.state = {
            isEdit:false
        }

        this.onEdit=this.onEdit.bind(this)
        this.onSave=this.onSave.bind(this)
        this.onСancel=this.onСancel.bind(this)
    }

    getIdref = (node)=>{this.idField=node}
    getNameref= (node)=>{this.nameField=node}
    getEmailref= (node)=>{this.emailField=node}
    getConfigref= (node)=>{this.configField=node}
    getTimerref= (node)=>{this.timerField=node}
    getflagsref= (node)=>{this.flagsField=node}
    
    onEdit(){
        const { nameField, emailField, configField,timerField,flagsField} = this
        const { name, email, config_bool, timer_integer, flags} = this.props
        
        nameField.value = name
        emailField.value = email
        configField.value = config_bool
        timerField.value = timer_integer
        flagsField.value = flags

        this.setState({isEdit:true})
    }

    onSave(){
        const {id, onSave} = this.props
        const {nameField, emailField, configField,timerField,flagsField} = this
        onSave({
            id:id,
            name:nameField.value,
            email:emailField.value,
            config_bool:configField.value,
            timer_integer:timerField.value,
            flags:flagsField.value,
            dateactivate:new Date().toGMTString(),
            dateupdate:new Date().toGMTString()
        })
        this.setState({isEdit:false})
    }

    onСancel(){
        this.setState({isEdit:false})
    }



    render(){
        const {onEdit, onSave, onСancel, getNameref, getEmailref, getConfigref, getTimerref, getflagsref} = this
        const {isEdit} = this.state
        const {id, name, email, config_bool, timer_integer, flags, dateactivate, dateupdate, onRemove} = this.props
        return(
            <div className='card-user'>
                <div className='item'>
                    <div>{id}</div>
                </div>
                <div className='item'>
                    <div hidden={isEdit}>{name}</div>
                    <input ref={getNameref} type="text" size='5' hidden={!isEdit}></input>
                </div>
                <div className='item' >
                    <div hidden={isEdit}>{email}</div>
                    <input ref={getEmailref} type="text" size='10' hidden={!isEdit}></input>
                </div>
                <div className='item' >
                    <div hidden={isEdit}>{config_bool}</div>
                    <input ref={getConfigref} type="text" size='5' hidden={!isEdit}></input>
                </div>
                <div className='item' >
                    <div hidden={isEdit}>{timer_integer}</div>
                    <input ref={getTimerref} type="text" size='5' hidden={!isEdit}></input>
                </div>
                <div className='item' >
                    <div hidden={isEdit}>{flags}</div>
                    <input ref={getflagsref} type="text" size='5' hidden={!isEdit}></input>
                </div>
                <div className='item' >
                    <div>{dateactivate}</div>
                </div>
                <div className='item' >
                    <div>{dateupdate}</div>
                </div>
                <button className='item' onClick={isEdit?onSave:onEdit}>{isEdit?'Save':'Edit'}</button> 
                <button className='item' onClick={isEdit?onСancel:onRemove}>{isEdit?'Cancel':'Delete'}</button>
            </div>
        )
    }
}


//Old vers
// const Color = ({id, name, email, onRemove=f=>f})=>
//     <div className='card-user'>
//         <div className='item'>{id}</div>
//         <div className='item'>{name}</div>
//         <div className='item' >{email}</div>
//         <button className='item'>Edit</button> 
//         <button className='item' onClick={onRemove}>Delete</button>
//     </div>

export default Color