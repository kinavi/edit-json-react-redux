import {TitleTypeActions} from '../TypeActions'

export const Titles = (state = [] , action)=>{
    switch(action.Type){
        case TitleTypeActions.ADD_TITLE:
            return (
                state.includes(action.value))?
                state:
                [...state, action.value]
        case TitleTypeActions.REMOVE_TITLE:
            return state.filter(t=>t!=action.value)
        case TitleTypeActions.EDIT_TITLE:
            return state.map((title,index)=>
            (
                index==action.index)?
                action.value:
                title
            )
        default:
            return state
    }
} 