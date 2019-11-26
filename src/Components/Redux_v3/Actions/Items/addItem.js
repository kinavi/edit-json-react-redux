import {TypeActions} from '../../TypeActions'

export const addItem = (id, cells)=>(
    {
        type:TypeActions.ADD_ITEM,
        id,
        cells
    }
)

