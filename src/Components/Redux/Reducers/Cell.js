import {TypeActions} from '../TypeActions'

export const Cell = (state = {}, action)=>{
    switch(action.type){
        case TypeActions.ADD_CELL:
            return {
                value:action.value,
                key:action.key,
                isEdit:action.isEdit
            }
        case TypeActions.EDIT_CELL:
            return (state.key!==action.key)?
                state:
                {
                    ...state,
                    value:action.value,
                    isEdit:action.isEdit,
                }
        case TypeActions.SWITCH_CELL_EDIT:
            return (state.key!==action.key)?
                state:
                {
                    ...state,
                    isEdit:action.isEdit
                }
        default:
            return state
    }
}