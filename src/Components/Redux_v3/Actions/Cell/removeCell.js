import {TypeActions} from '../../TypeActions'

export const removeCell = (id, key)=>(
    {
        type:TypeActions.REMOVE_CELL,
        id,
        key
    }
)
