import { TypeActions } from '../../TypeActions'

export const inputLog = (value)=>(
    {
        type:TypeActions.INPUT_LOG,
        value
    }
)
