import {TypeActions} from '../../TypeActions'

export const editCell = (id, key, value, isEdit)=>(
    {
        type:TypeActions.EDIT_CELL,
        id,
        key,
        value,
        isEdit
    }
)
