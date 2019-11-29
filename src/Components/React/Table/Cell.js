import React from 'react';
import { connect } from 'react-redux'
import { switchEditeMode } from '../../Redux/Actions/Cell/switchEditeMode'
import { editCell } from '../../Redux/Actions/Cell/editCell'

const Cell = ({value,keyObj,id,isEdit, switchEditeMode,onSaveChange}) =>{
    let field
    return (
        <td onDoubleClick={()=>{switchEditeMode(id, keyObj, true)}}>
            {(isEdit)?
            <div>
                <input ref={node=>field=node} type='input' placeholder={value}/>
                <button onClick={(e)=>{onSaveChange(id, keyObj, field.value, false);e.preventDefault()}}>+</button>    
                <button onClick={(e)=>{switchEditeMode(id, keyObj, false);e.preventDefault()}}>x</button>    
            </div>
            :
            <div>
                {value}
            </div>
            }
        </td>
    )
}

const mapDispatchToProps = dispatch =>
({
    switchEditeMode(id, key, isEdit){
        dispatch(switchEditeMode(id, key, isEdit))
    },

    onSaveChange(id, key, value, isEdit){
        dispatch(editCell(id, key, value, isEdit))
    }

})

export default connect(
    null,
    mapDispatchToProps
)(Cell)