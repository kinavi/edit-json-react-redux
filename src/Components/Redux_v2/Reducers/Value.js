import {TypeActions} from '../TypeActions'

export const Value=(state = {}, action)=>
{
    switch(action.type)
    {
        case TypeActions.EDIT:
            const {key, value} = action
            const newObj
            newObj[key]=value
            return newObj
    }
}
//state[`${action.key}`]=action.value
//{...state, key:value}