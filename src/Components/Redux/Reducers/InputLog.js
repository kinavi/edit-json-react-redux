import { TypeActions } from '../TypeActions'

export const InputLog = (state = '', action)=>{
    switch(action.type){
        case TypeActions.INPUT_LOG:
            return action.value

        default:
                return state   
    }
}