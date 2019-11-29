import {TypeActions} from '../../TypeActions'

export const switchEditeMode = (id, key, isEdit)=>(
    {
        type:TypeActions.SWITCH_CELL_EDIT,
        id,
        key,
        isEdit
    }
)
