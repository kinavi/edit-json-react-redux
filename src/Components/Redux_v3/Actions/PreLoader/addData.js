import {TypeActions} from '../../TypeActions'

export const addData = (id, value)=>(
    {
        type:TypeActions.ADD_DATA,
        id,
        value
    }
)