import { TypeActions } from '../TypeActions'
import { items } from './Items'
import { stat } from 'fs'
import { titles } from './titles'

export const app = (state = {}, action)=>{
    switch(action.type)
    {
        case TypeActions.ADD_CELL:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.EDIT_CELL:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.REMOVE_CELL:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.SWITCH_CELL_EDIT:
            return {
                ...state,
                items:items(state.items, action)
            }
            //items(state, action)
        

        case TypeActions.ADD_ITEM:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.REMOVE_ITEM:
            return {
                ...state,
                items:items(state.items, action)
            }

        case TypeActions.SORT_BY_MASK:
            return items(state, action)

        case TypeActions.UPDATE_TITLES:
            return titles(state, action)

        default:
            return state

    }   
}