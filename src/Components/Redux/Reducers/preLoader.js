import { TypeActions } from '../TypeActions'
import { preItem } from './preItem'

export const preLoader = (state = [], action)=>{
    switch(action.type)
    {
        case TypeActions.ADD_DATA:
            return [ ...state, preItem({},action)]
        default:
                return state
    }
}