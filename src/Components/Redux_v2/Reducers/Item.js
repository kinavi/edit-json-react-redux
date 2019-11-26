import {ItemTypeActions} from '../TypeActions'

export const Item = (state = {}, action)=>{
    switch(action.type){
        case ItemTypeActions.ADD_USER:
            return {...action.value}
        default:
            return state
    }
}
// (state.id!==action.id&&!state.hasOwnProperty(action.key))?
//             state:
//             {...state,  ...Value(state, action) }