import React from 'react';
import './style.css'
import editUser from '../../Redux/Actions/EditUser'
import switchEditMode from '../../Redux/Actions/SwitchEditMode'
import { connect } from 'react-redux'


const User = ({store, id, name, email, config_bool, timer_integer, flags, dateactivate, dateupdate, onRemove, isEdit})=>{

   let nameField, emailField, configField, timerField, flagsField, dateactivateField

   const onEdit=()=>
      store.dispatch(
          switchEditMode(true, id)
      )

  const onCancel =()=>
      store.dispatch(
          switchEditMode(false, id)
      )

   const onSave = ()=>{
      store.dispatch(
         editUser(
            id,
            nameField.value,
            emailField.value,
            configField.value,
            timerField.value,
            flagsField.value,
            dateactivateField.value,
            new Date().toLocaleString()
            )
      )
      onCancel()
   }
   
   const getNameref = (node)=>{nameField=node}
   const getEmailref= (node)=>{emailField=node}
   const getConfigref= (node)=>{configField=node}
   const getTimerref= (node)=>{timerField=node}
   const getflagsref= (node)=>{flagsField=node}
   const getDateActivateref= (node)=>{dateactivateField=node}

   return (
      <div className='card-user'>
               <div className='item'>
                  <div>{id}</div>
               </div>
               <div className='item'>
                  <div hidden={isEdit}>{name}</div>
                  <input ref={getNameref} type="text" size='5' hidden={!isEdit} placeholder={name}></input>
               </div>
               <div className='item' >
                  <div hidden={isEdit}>{email}</div>
                  <input ref={getEmailref} type="text" size='10' hidden={!isEdit} placeholder={email}></input>
               </div>
               <div className='item' >
                  <div hidden={isEdit}>{config_bool}</div>
                  <input ref={getConfigref} type="text" size='5' hidden={!isEdit} placeholder={config_bool}></input>
               </div>
               <div className='item' >
                  <div hidden={isEdit}>{timer_integer}</div>
                  <input ref={getTimerref} type="text" size='5' hidden={!isEdit} placeholder={timer_integer}></input>
               </div>
               <div className='item'>
                  <div hidden={isEdit}>{flags}</div>
                  <input ref={getflagsref} type="text" size='5' hidden={!isEdit} placeholder={flags}></input>
               </div>
               <div className='item' >
                  <div hidden={isEdit}>{dateactivate}</div>
                  <input ref={getDateActivateref} type="text" size='5' hidden={!isEdit} placeholder={dateactivate}></input>
               </div>
               <div className='item' >
                  <div>{dateupdate}</div>
               </div>
               <button className='item' onClick={isEdit?onSave:onEdit}>{isEdit?'Save':'Edit'}</button> 
               <button className='item' onClick={isEdit?onCancel:onRemove}>{isEdit?'Cancel':'Delete'}</button>
            </div>
   )
}

User.getNameref= (node)=>{this.nameField=node}
User.getEmailref= (node)=>{this.emailField=node}
User.getConfigref= (node)=>{this.configField=node}
User.getTimerref= (node)=>{this.timerField=node}
User.getflagsref= (node)=>{this.flagsField=node}
User.getDateActivateref= (node)=>{this.dateactivateField=node}

export default User