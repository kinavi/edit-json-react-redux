import React from 'react'
import { connect } from 'react-redux'
import {IsJsonFormat} from '../../Library' 
//import {addItem} from '../../Redux/Redux_v3/Actions/Cell/'
//import { addMask } from './'

const Input = (props,{store})=>
{
    let taValue;
    const {onReadData} = props
    return(
        <div>
            <textarea ref={node=>taValue=node.value} onInput={()=>onReadData(taValue)}/>
        </div>
    )
}
    

//export default Input

// const mapStateToProps = state =>
// ({
//     Titles: [...state.Titles],
//     Items:[...state.Items]
// })
function getAllKeys(obj){
    return Object.keys(obj)
}

const mapDispatchToProps = dispatch =>
({
    // onReadData(value){
    //     if(IsJsonFormat(value))
    //     {
    //         if(Array.isArray(value))
    //             value.map(it=>dispatch(addMask(it)))//addItem(it.id, )
    //         else
    //             dispatch(addMask(value))
    //     }
    // }
    // onRemove(id) {
    //     dispatch(RemoveUser(id))
    // },
    // onClear(){
    //     dispatch(ClearUsers())
    // },
    // onEdit(id){
    //     dispatch(switchEditMode(true,id))
    // },
    // onCancel(id){
    //     dispatch(switchEditMode(false,id))
    // },
    // onSave(id, name, email, config, timer, flags, dateactivate){
    //     dispatch(
    //         editUser(
    //             id,
    //             name,
    //             email,
    //             config,
    //             timer,
    //             flags,
    //             dateactivate,
    //             new Date().toLocaleString()
    //         )
    //     )
    // }
})

export default connect(
    //mapStateToProps,
    mapDispatchToProps
)(Input)