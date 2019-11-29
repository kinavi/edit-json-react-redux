import {TypeActions} from '../TypeActions'
import {Cells} from './Cells'

export const Item = (state = {}, action)=>{
    switch(action.type)
    {
        case TypeActions.ADD_ITEM:
            return {
                id:action.id,
                cells:action.cells
            }


        case TypeActions.ADD_CELL:
            return (state.id!==action.id)?
            state:
            {
                id:state.id,
                cells:Cells(state.cells,action)
            }
        case TypeActions.EDIT_CELL:
            return (state.id!==action.id)?
                state:{
                    id:action.id,
                    cells:Cells(state.cells, action)
                 }
        case TypeActions.REMOVE_CELL:
            return (state.id!==action.id)?
                state:
                {
                    id:action.id,
                    cells:Cells(state.cells, action)
                }
        case TypeActions.SWITCH_CELL_EDIT:
            return (state.id!==action.id)?
                state:
                {
                    id:action.id,
                    cells:Cells(state.cells, action)
                }
        default:
            return state
    }
}
