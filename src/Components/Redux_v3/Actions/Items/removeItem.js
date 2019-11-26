import {TypeActions} from '../../TypeActions'

export const removeItem = (id)=>({
    type:TypeActions.REMOVE_ITEM,
    id
})