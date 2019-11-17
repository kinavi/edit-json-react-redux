import TA from '../TypeActions'
import User from './User'

 const Users = (state = [], action)=>{
    switch(action.type)
    {
        case TA.ADD_USER:
            return [
                ...state,
                User({},action)
            ]
        case TA.EDIT_USER:
            return state.map(
                u=>User(u, action)
            )
        case TA.REMOVE_USER:
            return state.filter(
                u=>u.id!==action.id
            )
        case TA.SWITCH_EDIT_MODE:
            return state.map(u=>
                User(u,action)
                // u.value.id!==action.id?
                // {
                //     ...state,
                //     isEdit:!action.isEdit
                // }://state.isEdit=action.isEdit
                // {
                //     ...state,
                //     isEdit:action.isEdit
                // }
            )
        case TA.CLEAR_USERS:
            return []
        default: 
            return state
    }
}
export default Users