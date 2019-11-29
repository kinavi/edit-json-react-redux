import { TypeActions } from '../TypeActions'

export const preItem = (state = {}, action)=>{
    switch(action.type)
    {
        case TypeActions.ADD_DATA:
            return {
                id:action.id,
                cells:creatItem(action.value)
            }
        default:
            return state
    }
}


function creatItem(values){
    let cells = [];
    for(let k in values){
        cells.push({
            value:values[k],
            key:k,
            isEdit:false
        })
    }
    return cells
}
