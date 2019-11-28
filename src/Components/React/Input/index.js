import React from 'react'
import { connect } from 'react-redux'
import {IsJsonFormat} from '../../Library' 
import { inputLog } from '../../Redux_v3/Actions/PreLoader/inputLog'
import { addData } from '../../Redux_v3/Actions/PreLoader/addData'
//import { updateLastId } from '../../Redux_v3/Actions/LastId/updateLastId'
import { clearPreLoader } from '../../Redux_v3/Actions/PreLoader/clearPreLoader'
import PreItem from './PreItem'
import './style.css'
import { addItem } from '../../Redux_v3/Actions/Items/addItem'
import { sortCellByMask } from '../../Redux_v3/Actions/Cell/sortCellByMask'
import {updateTitles} from '../../Redux_v3/Actions/Titles/updateTitles'

const Input = (props,{store})=>
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
        </div>
        
    )
}
//test - [{"name":"Vova","id":110},{"name":"Vova","id":110}]
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
        if(IsJsonFormat(value))
        {
            const parsJSON = JSON.parse(value)
            dispatch(clearPreLoader())
            if(Array.isArray(parsJSON))
            {
                //console.dir(parsJSON)
                parsJSON.map((it, i, ar)=>dispatch(addData(+id+1+i,it)))//addItem(it.id, )
            }   
            else
            {
                dispatch(addData(id,parsJSON))
            }

            //dispatch(updateLastId())
            dispatch(inputLog(`JSON: ${value}`))
        }
        else if(value=='')
        {
            
            dispatch(inputLog('Введите JSON'))
        }   
        else
            dispatch(inputLog(`Ошибка ввода: ${value}`))
    },

    onAddItem(Items, clear){
        Items.map(item=>{
            dispatch(addItem(item.id,item.cells))
        })
        //dispatch(updateLastId())
        dispatch(clearPreLoader())
        clear()
        dispatch(inputLog(`Введите JSON`))
        dispatch(updateTitles())
        dispatch(sortCellByMask())
    }
})




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)