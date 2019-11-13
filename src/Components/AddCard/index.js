import React,{Component} from 'react';

//Переделать
class PatternCard extends Component{

    constructor(props){
        super(props)
        this.state={

        }

        this.getCard=this.getCard.bind(this)
    }

    getIdref = (node)=>{this.idField=node}
    getNameref= (node)=>{this.nameField=node}
    getEmailref= (node)=>{this.emailField=node}
    getConfigref= (node)=>{this.configField=node}
    getTimerref= (node)=>{this.timerField=node}
    getflagsref= (node)=>{this.flagsField=node}

    getCard(){
        const {nameField, emailField, configField,timerField,flagsField} = this
        const {freeId} = this.props
        //console.dir(freeId())
        //{id, name, email, config_bool, timer_integer, flags}
        return {
            id:freeId(),
            name:nameField.value,
            email:emailField.value,
            config_bool:configField,
            timer_integer:timerField,
            flags:flagsField,
            dateactivate:new Date().toGMTString(),
            dateupdate:new Date().toGMTString()
        }
    }

    render(){
        const { getNameref, getEmailref, getConfigref, getTimerref, getflagsref, getCard} = this
        const {onCancel, onAdd} = this.props
        return(
            <div>
                <div className='card-user'>
                    {/* <div className='item'>
                        <input ref={getIdref} type="text" size='5'></input>
                    </div> */}
                    <div className='item'>
                        <div>Name:</div>
                        <input ref={getNameref} type="text" size='5'></input>
                    </div>
                    <div className='item'>
                        <div>Mail:</div>
                        <input ref={getEmailref} type="text" size='10'></input>
                    </div>
                    <div className='item'>
                        <div>Config:</div>
                        <input ref={getConfigref} type="text" size='5'></input>
                    </div>
                    <div className='item'>
                        <div>Timer:</div>
                        <input ref={getTimerref} type="text" size='5'></input>
                    </div>
                    <div className='item'>
                        <div>Flags:</div>
                        <input ref={getflagsref} type="text" size='5'></input>
                    </div>
                    {/* <div className='item'>
                        <div>{dateactivate}</div>
                    </div>
                    <div className='item'>
                        <div>{dateupdate}</div>
                    </div> */}
                    {/* <button className='item' onClick={isEdit?onSave:onEdit}>{isEdit?'Save':'Edit'}</button> 
                    <button className='item' onClick={isEdit?onСancel:onRemove}>{isEdit?'Cancel':'Delete'}</button> */}
                    <button className='item' onClick={()=>onAdd(getCard())} >Add</button>
                    <button className='item' onClick={onCancel}>Cancel</button>
                </div>
            </div>
        )
    } 
}
    

class AddCard extends Component{

    constructor(props){
        super(props)
        this.state={
            isAddMode:false
        }
        this.openAddMode=this.openAddMode.bind(this)
        this.closeAddMode=this.closeAddMode.bind(this)
        this.AddCard=this.AddCard.bind(this)
    }

    openAddMode(){
        this.setState({isAddMode:true})
    }

    closeAddMode(){
        this.setState({isAddMode:false})
    }

    AddCard(value){
        const {onAddCard} = this.props
        //console.log('Value:')
        //console.log(value)
        onAddCard(value)
    }


    render(){
        const {isAddMode} = this.state
        const {openAddMode,closeAddMode, AddCard} = this
        const {freeId} = this.props
        return(
            <div >
                <div hidden={isAddMode}>
                    <button onClick={openAddMode}>Add</button>
                </div>
                <div hidden={!isAddMode}>
                    <PatternCard onAdd={AddCard} onCancel={closeAddMode} freeId={freeId}/>
                </div>
            </div>
        )
    }
}

export default AddCard