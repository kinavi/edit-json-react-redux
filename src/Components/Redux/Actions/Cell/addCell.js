import {TypeActions} from '../../TypeActions'

export const addCell = (id, value, key,isEdit)=>(
    {
        type:TypeActions.ADD_CELL,
        id,
        value,
        key,
        isEdit
    }
)
