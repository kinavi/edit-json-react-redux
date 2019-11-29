import { TypeActions } from '../TypeActions'
import { getLastId } from '../../Library'

export const lastId = (state = 0, action)=>{
    switch(action.type){
        case TypeActions.UPDATE_LAST_ID:
            return getLastId(state)
        default:
            return state
    }
}

