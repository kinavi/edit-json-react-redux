import {TypeActions} from '../TypeActions'
import {Cell} from './Cell'

export const Cells = (state = [], action)=>{
    switch(action.type)
    {
        // case TypeActions.ADD_ITEM:
        //     return action.result

        case TypeActions.ADD_CELL:
            return [...state, Cell({},action)]
        case TypeActions.REMOVE_CELL:
            return state.filter(
                (cell => (cell.key!==action.key)?
                        true:
                        false
                    ))
        case TypeActions.EDIT_CELL:
            return state.map(cell => Cell(cell, action))
        case TypeActions.SWITCH_CELL_EDIT:
            return state.map(cell => Cell(cell, action))
        // case TypeActions.SORT_BY_MASK:
        //     return 
        default:
            return state
    }
}