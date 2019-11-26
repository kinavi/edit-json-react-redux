import {ItemTypeActions} from '../TypeActions'
import {Item} from './Item'

export const Items = (state = [], action)=>{
    switch(action.type)
    {
        case ItemTypeActions.ADD_USER:
            return [...state, Item({},action)]
        case TypeActions.EDIT:
            return state.map(
                item=>Item(item,action)
            )
        default:
                return state
    }
}