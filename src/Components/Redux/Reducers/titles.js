import {TypeActions} from '../TypeActions'
import { updateTitles } from '../../Library'

export const titles = (state = {}, action)=>{
    switch(action.type)
    {
        case TypeActions.UPDATE_TITLES:
            return updateTitles(state.titles, state.items)
        default:
            return state
    }
}

