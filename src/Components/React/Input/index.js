import React from 'react'
import { connect } from 'react-redux'
import { IsJsonFormat } from '../../Library' 
import { inputLog } from '../../Redux/Actions/PreLoader/inputLog'
import { addData } from '../../Redux/Actions/PreLoader/addData'
import { updateLastId } from '../../Redux/Actions/LastId/updateLastId'
import { clearPreLoader } from '../../Redux/Actions/PreLoader/clearPreLoader'
import PreItem from './PreItem'
import { addItem } from '../../Redux/Actions/Items/addItem'
import { sortCellByMask } from '../../Redux/Actions/Cell/sortCellByMask'
import {updateTitles} from '../../Redux/Actions/Titles/updateTitles'

const Input = (props)=>
{
    let taValue;

    function clearField()
    {
        taValue.value=''
    }

    const {onReadData, Items, InputLog,LastId, onAddItem} = props
    return(
        
        <div className='input'>
            <textarea ref={node=>taValue=node} onInput={()=>onReadData(LastId,taValue.value)}/>
            <div>{(InputLog!==''&&!!InputLog)?InputLog:'Введите JSON'}</div>
            {(!Items.length)?
            <div></div>
            :
            <div>
                <PreItem/><br/>
                <button onClick={()=>onAddItem(Items,clearField)} >Add main table</button>
            </div>
            }
            <div>Last id: {LastId}</div>
        </div>
        
    )
}

const mapStateToProps = state =>
({

    Items:state.preLoader,
    InputLog:state.InputLog,
    LastId:state.lastId
})


const mapDispatchToProps = dispatch =>
({
    onReadData(id,value){
        dispatch(clearPreLoader())
        //dispatch(updateLastId())
        if(IsJsonFormat(value))
        {
            const parsJSON = JSON.parse(value)
            const newID = +id+1;
            if(Array.isArray(parsJSON))
            {
                parsJSON.forEach((it, i, ar)=>{
                    dispatch(addData(newID+i,it))
                    }
                )
            }   
            else
            {
                dispatch(addData(newID,parsJSON))
            }

            
            dispatch(inputLog(`JSON: ${value}`))
        }
        else if(value==='')
        {
            
            dispatch(inputLog('Введите JSON'))
        }   
        else
            dispatch(inputLog(`Ошибка ввода: ${value}`))
    },

    onAddItem(Items, clear){
        dispatch(addItem())
        dispatch(clearPreLoader())
        clear()
        dispatch(inputLog(`Введите JSON`))
        dispatch(updateTitles())
        dispatch(sortCellByMask())
        dispatch(updateLastId())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)