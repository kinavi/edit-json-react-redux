import {TypeActions} from '../TypeActions'
import {items} from './Items'

export const Basket = (state = {}, action)=>{
    switch(action.type){
        case TypeActions.EDIT_CELL:
            return {
                items:items(state.items, action)
            }
        case TypeActions.REMOVE_ITEM:
            return {
                items:items(state.items, action)
            }
        case TypeActions.SWITCH_CELL_EDIT:
            return {
                items:items(state.items, action)
            }
        case TypeActions.SORT_BY_MASK:
            return {
                items:items(state.items, action)
            }   
        default:
            return state
    }
}