import { TypeActions } from '../TypeActions'
import { items } from './Items'
//import { stat } from 'fs'
import { titles } from './titles'
import { preLoader } from './preLoader'
import { InputLog } from './InputLog'
import { lastId } from './lastId'

export const app = (state = {}, action)=>{
    switch(action.type)
    {
        case TypeActions.ADD_CELL:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.EDIT_CELL:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.REMOVE_CELL:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.SWITCH_CELL_EDIT:
            return {
                ...state,
                items:items(state.items, action)
            }
            //items(state, action)
        

        case TypeActions.ADD_ITEM:
            return {
                ...state,
                items:items(state.items, action)
            }
        case TypeActions.REMOVE_ITEM:
            return {
                ...state,
                items:items(state.items, action)
            }

        case TypeActions.SORT_BY_MASK:
            return {
                ...state,
                items:items(state, action)
            }
            

        case TypeActions.UPDATE_TITLES:
            return {
                ...state,
                titles:titles(state, action)
            }

        case TypeActions.ADD_DATA:
            return {
                ...state,
                preLoader:preLoader(state.preLoader, action)
            }
            
            
        case TypeActions.INPUT_LOG:
            return {
                ...state,
                InputLog:InputLog(state, action)
            }
            
        case TypeActions.UPDATE_LAST_ID:
            return{
                ...state,
                lastId:lastId(state.items, action)
            }


        case TypeActions.CLEAR_PRELOADER:
            return{
                ...state,
                preLoader:[]
            }

        default:
            return state

    }   
}