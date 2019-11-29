import { TypeActions } from '../TypeActions'

export const lastId = (state = 0, action)=>{
    switch(action.type){
        case TypeActions.UPDATE_LAST_ID:
            return getLastId(state)
        default:
            return state
    }
}

function getLastId(items){
    // let arr = items.copyWithin(0)
    // return (arr.length)?arr.pop().id:0
    return (items.length)?items[items.length-1].id:0
}